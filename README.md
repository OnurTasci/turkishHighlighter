# TurkishHighlighter

A lightweight JavaScript library to highlight Turkish characters (such as İ, Ş, Ö, etc.) in a string.

# Example

```html
    <h1>Turkish Character Highlighter</h1>
    <p id="example-text">İstanbul'un tarihi çok önemlidir.</p>
    <p id="highlighted-text"></p>

    <script>
        const text = document.getElementById('example-text').textContent;
        const searchTerm = "istanbul";

        // Highlight the search term in the text
        const highlightedText = TurkishHighlighter.highlightText(text, searchTerm);

        // Display the highlighted text
        document.getElementById('highlighted-text').innerHTML = highlightedText;
    </script>
```
