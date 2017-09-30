var validate = function(text, cloze)
{
	if (!text.includes(cloze))
	{
		throw new Error("Text does not include Cloze")
	}
}

function ClozeCard(text, cloze)
{
	try
	{
		validate(text, cloze)
	}
	catch(err)
	{
		console.log(err)
	}

	this.fullText = text;
	this.cloze = cloze;
	this.partialText = text.replace(cloze,"...");
}

module.exports = ClozeCard;