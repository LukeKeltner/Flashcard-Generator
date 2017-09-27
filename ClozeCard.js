function ClozeCard(text, cloze)
{
	if (!text.includes(cloze))
	{
		console.log("You done messed up.")
		return null
	}

	this.fullText = text;
	this.cloze = cloze;
	this.partialText = text.replace(cloze,"...");
}

module.exports = ClozeCard;