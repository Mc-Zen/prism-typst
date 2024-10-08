import "./prism.js"
import "../src/prism-typst.js"
import * as fs from 'fs';

function isBlank(str) {
	return /^\s*$/.test(str);
}


function simplify(tokenStream) {
  return tokenStream
    .map(innerSimple)
    .filter(value => !(typeof value === 'string' && isBlank(value)));

  /**
   * @param {string | TokenStreamItem} value
   * @returns {string | [string, string | Array]}
   */
  function innerSimple(value) {
    if (typeof value === 'object') {
      if (Array.isArray(value.content)) {
        return [value.type, simplify(value.content)];
      } else {
        return [value.type, value.content.trim()];
      }
    } else {
      return value.trim();
    }
  }
}

function stringify(o, language) {
  if (typeof o == 'string') {
    return o;
  }
  console.log(o)
  if (Array.isArray(o)) {
    var s = '';
    o.forEach(function (e) {
      s += stringify(e, language);
    });
    return s;
  }

  var env = {
    type: o.type,
    content: stringify(o.content, language),
    tag: 'span',
    classes: ['token', o.type],
    attributes: {},
    language: language
  };

  var aliases = o.alias;
  if (aliases) {
    if (Array.isArray(aliases)) {
      Array.prototype.push.apply(env.classes, aliases);
    } else {
      env.classes.push(aliases);
    }
  }

  // Prism.hooks.run('wrap', env);

  var attributes = '';
  for (var name in env.attributes) {
    attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
  }

  return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
};

function tokenize(text, grammar, language) {
  var env = {
    code: text,
    grammar: grammar,
    language: language
  };
  Prism.hooks.run('before-tokenize', env);
  if (!env.grammar) {
    throw new Error('The language "' + env.language + '" has no grammar.');
  }
  env.tokens = Prism.tokenize(env.code, env.grammar);
  Prism.hooks.run('after-tokenize', env);
  return simplify(env.tokens)
  // return stringify(Prism.util.encode(env.tokens), env.language);
}


function run_test(filename) {
  let content = fs.readFileSync(filename, 'utf8');
  let [raw, desired] = content.split("----------")
  let actual = tokenize(raw.trim(), Prism.languages.typst, "typ")
  desired = JSON.parse(desired)
  expect(JSON.stringify(actual)).toEqual(JSON.stringify(desired))
}

function run_test_suite(name) {
  let directory = 'tests/' + name + "/"
  var files = fs.readdirSync(directory);

  for (const file of files) {
    run_test(directory + file)
  }
}

describe('prism-typst.js', () => {
  
  test('Running basic tests', () => {
    run_test_suite("basic_tests")
    // console.log(Prism.tokenize("= hello\n\\@I'm here\n#{}", Prism.languages.typst))
    // console.log(highlight("= hello\n\\@I'm here\n#{let u = 2}", Prism.languages.typst))
    
  });
});