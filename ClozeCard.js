/*var ClozeCard = function(text, cloze) {
    this.fullText = text,
    this.cloze = cloze,
    this.partial = this.fullText.split(this.cloze, "test");
}*/

function ClozeCard(text, cloze) {
    this.fullText = text,
    this.cloze = cloze,
    this.partial = this.fullText.split(this.cloze)[1];
}

module.exports = ClozeCard;