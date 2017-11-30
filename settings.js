{
  // Highlight color words in all files (grey, green, etc.)
  "color-highlight.matchWords": true,
  "editor.selectionHighlight": true,
  "editor.occurrencesHighlight": false,
  "workbench.colorTheme": "One Dark Pro Vivid",
  "editor.fontSize": 15,
  "window.zoomLevel": 0,
  "editor.snippetSuggestions": "top",
  "editor.lineHeight": 24,
  "editor.fontLigatures": true,
  "explorer.decorations.badges": false,
  "workbench.colorCustomizations": {
    "sideBar.background": "#1f1f1f",
    "sideBar.foreground": "#A7AFBC",
    "gitDecoration.ignoredResourceForeground": "#727272",
    "sideBar.border": "#3b3b3b",
    "editor.background": "#1f1f1f",
    "editor.selectionBackground": "#ffbb0085",
    "editor.selectionHighlightBackground": "#ffbb0017",
    "editor.inactiveSelectionBackground": "#135564"
  },
  ////////////////////////////////////////////////
  // TEXT MATE STYLES
  ///////////////////////////////////////////////
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "name": "Storage",
        "scope": "storage",
        "settings": {
          "foreground": "#D78B0F"
        }
      },
      {
        "name": "Functions",
        "scope": ["entity.name.function", "support.function"],
        "settings": {
          "foreground": "#ffce7f"
        }
      },
      {
        "name": "Punctuation",
        "scope": [
          "support.variable.property.js",
          "variable.other.property.js",
          "support.variable.property.dom.js"
        ],
        "settings": {
          "foreground": "#1abc9c"
        }
      },
      {
        "name": "Variable names",
        "scope": ["variable.other.readwrite.js"],
        "settings": {
          "foreground": "#f15d76"
        }
      },
      {
        "name": "Meta",
        "scope": [
          "support.variable.property.js",
          "variable.other.object.property.js"
        ],
        "settings": {
          "foreground": "#1abc9c"
        }
      },
      {
        "name": "Property values",
        "scope": "meta.object-literal.key.js",
        "settings": {
          "foreground": "#A2CA84"
        }
      }
    ]
  },
  "atomKeymap.promptV3Features": true,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.formatOnPaste": true,
  "workbench.iconTheme": "file-icons"
}
