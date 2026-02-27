var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-rev-def",
  "level": "1",
  "url": "sec-rev-def.html",
  "type": "Section",
  "number": "1.1",
  "title": "Definitions",
  "body": " Definitions  As we move through Precalculus and Calculus, we will need to be careful with the words that we use. Mathematical writing is characterized by precise and careful language, which allows us to avoid ambiguity and possible misunderstandings. However, we will only avoid misunderstanding if we all know what words mean. Throughout these notes, I will include definitions for the terms that I use, and I need you to make note of these definitions and refer back to them when you see a word you don't recognize. In many ways, mathematics is a language that can describe quantitative or geometric information. Calculus, the focus of these notes, is a language that we can use to describe quantities that change. We will spend a lot of time discussing the rules that govern this language, but it is also crucially important to take the time to learn the words that make up this language.    An expression is a combination of numbers, variables, and operations.    This definition perhaps leads to more questions than it answers. After all, what are the precise, mathematical definitions of numbers, variables, and operations?  For us, in this book, numbers will always refer to real numbers . It is difficult to define real numbers precisely, but you are familiar with them nonetheless. These are numbers that correspond to positions on the number line. Positive real numbers correspond to lengths. All real numbers are positive, negative, or zero. Real numbers include whole numbers, fractions, and irrational numbers. Irrational numbers, like and , are numbers that can't be written as ratios of whole numbers, and their decimal representations are nonterminating and nonrepeating.  A variable is a letter or symbol that is used to represent an unknown or unspecified number. There is some nuance here. In an equation, the variable is unknown and the goal will be to solve for all possible values of the variable that make the equation true. In function notation, the variable is unspecified, and we will replace the variable with various numbers and see how the output of the function changes.  An operation is a rule for transforming one or more numbers into a new number. Most operations act on two numbers, and examples of operations include addition, subtraction, multiplication, and division . Importantly, equality ( ) is not an operation, but instead something called a relation . So, while and are examples of expressions, the equation is not an expression.    An equation is statement that the values of two mathematical expressions are equal.    An equation might always be true, like the equations and , or they might be conditionally true, such as the equation , which is only true if or . It is also possible for an equation to always be false, such as the equation .    An inequality is a statement that compares two expressions using one of the following symbols: (less than), (less than or equal to), (greater than), (great than or equal to), or (not equal).    Just like equations, an inequality might be always true, conditionally true, or always false. For example, the inequality is true for every real number because the square of a real number is always zero or positive. On the other hand, the inequality is only true if the number is between 0 and 1.  "
},
{
  "id": "def-expression",
  "level": "2",
  "url": "sec-rev-def.html#def-expression",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  An expression is a combination of numbers, variables, and operations.   "
},
{
  "id": "sec-rev-def-5",
  "level": "2",
  "url": "sec-rev-def.html#sec-rev-def-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "real numbers "
},
{
  "id": "sec-rev-def-6",
  "level": "2",
  "url": "sec-rev-def.html#sec-rev-def-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "variable "
},
{
  "id": "sec-rev-def-7",
  "level": "2",
  "url": "sec-rev-def.html#sec-rev-def-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "operation relation "
},
{
  "id": "def-equation",
  "level": "2",
  "url": "sec-rev-def.html#def-equation",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  An equation is statement that the values of two mathematical expressions are equal.   "
},
{
  "id": "def-inequality",
  "level": "2",
  "url": "sec-rev-def.html#def-inequality",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  An inequality is a statement that compares two expressions using one of the following symbols: (less than), (less than or equal to), (greater than), (great than or equal to), or (not equal).   "
},
{
  "id": "sec-def-function",
  "level": "1",
  "url": "sec-def-function.html",
  "type": "Section",
  "number": "2.1",
  "title": "Definition of a Function",
  "body": " Definition of a Function  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
