
(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    } else {
        global.TurkishHighlighter = factory();
    }
}(typeof window !== "undefined" ? window : this, function () {

    // Türkçe özel harfleri [Xx] formatına dönüştür
    function convertToTurkishPattern(term) {
        return term
            .replace(/[İi]/g, '[İi]')
            .replace(/[Şş]/g, '[Şş]')
            .replace(/[Öö]/g, '[Öö]')
            .replace(/[Çç]/g, '[Çç]')
            .replace(/[Ğğ]/g, '[Ğğ]')
            .replace(/[Üü]/g, '[Üü]');
    }

    // Verilen metinde eşleşen Türkçe harfleri vurgula
    function highlightText(text, term) {
        const pattern = convertToTurkishPattern(term);
        return String(text).replace(
            new RegExp(pattern, "giu"),
            '<strong style="text-decoration:underline;">$&</strong>'
        );
    }

    // API'yi döndür
    return {
        highlightText: highlightText
    };

}));
