export const light = {
  plain: {
    color: "#19181F",
    backgroundColor: "#fdfdfd",
  },
  styles: [
    {
      types: ["comment"],
      style: { color: "#8a8a8a" }
    },
    {
      types: ["keyword", "boolean"],
      style: { color: "#d73a49" }
    },
    {
      types: ["function"],
      style: { color: "#4b69c6" }
    },
    {
      types: ["number"],
      style: { color: "#b60157" }
    },
    {
      types: ["string"],
      style: { color: "#298e0d" }
    },
    {
      types: ["symbol"],
      style: { color: "#8b41b1" }
    },
    {
      types: ["label", "reference", "escaped", "operator"],
      style: { color: "#1d6c76" }
    },
    {
      types: ["raw"],
      style: { color: "#818181" }
    },
    {
      types: ["bold", "heading"],
      style: { "fontWeight": "bold" }
    },
    {
      types: ["italic"],
      style: { "fontStyle": "italic" }
    },
    {
      types: ["boltalic"],
      style: {
        "fontWeight": "bold",
        "fontStyle": "italic"
      }
    }
  ]
}

export const dark = {
  plain: {
    color: "#fdfdfd",
    backgroundColor: "#19181F",
  },
  styles: [
    {
      types: ["comment"],
      style: { color: "#b0b3c2" }
    },
    {
      types: ["keyword", "boolean"],
      style: { color: "#ffa49d" }
    },
    {
      types: ["function"],
      style: { color: "#7cd5ff" }
    },
    {
      types: ["number"],
      style: { color: "#ff7d79" }
    },
    {
      types: ["string"],
      style: { color: "#80f4b6" }
    },
    {
      types: ["symbol"],
      style: { color: "#caa8ff" }
    },
    {
      types: ["label", "reference", "escaped", "operator"],
      style: { color: "#d9f8f4" }
    },
    {
      types: ["raw"],
      style: { color: "#caccd6" }
    },
    {
      types: ["bold", "heading"],
      style: { "fontWeight": "bold" }
    },
    {
      types: ["italic"],
      style: { "fontStyle": "italic" }
    },
    {
      types: ["boltalic"],
      style: {
        "fontWeight": "bold",
        "fontStyle": "italic"
      }
    }
  ]
}
