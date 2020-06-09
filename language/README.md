# Learning a New Language – Like JavaScript!

Apologies up front to those of you who know some JavaScript (JS) – this is only somewhat about JS, and written by someone who has almost three whole weeks of experience with the language.  I have a lot to learn, but that’s okay – my career as a software developer has been most interesting when I was getting paid to learn things, as yours will be.

## The Structure of Intentional Language

When we write anything – notes to ourself, SMS messages to our friends and family, job applications, computer programs – our choice of words is dictated by what we are trying to accomplish and how we intend to communicate it.  Mostly we don’t consider this process at all; it is as natural a human activity as breathing, and literally is one of the unique features that defines us as a species.

Intentional language is a term I’ve just created or borrowed to mean communicating when we are actively thinking about communication.  We might use intentional language to express a moral or political or philosophical position, or to teach a skill, as I’m trying to do here.  One particular kind of intentional language is the production of technical documentation.  When we are writing software, or a user manual, or a product description, we are creating a technical document.  A technical document is one intended to be understood in exactly one way, whether it is intended to be used by oneself, or someone else, even a machine.

When we write a technical document, like a contract or a recipe or a musical score, we are writing a document that is as constrained as possible to be unambiguous; that is, there should be only one way to understand it.  Spoken and written language is not like this – in fact, many of the joys of poetry, lyrics, rap and conversation would be lost if human language wasn’t ambiguous – this is what makes puns, metaphor and allegory possible.  But this ambiguity doesn’t work well at all in a technical document.

Consider these English sentences:

> _I watched the dog get the notes from today’s class from Angela._

> _I watched the dog; get the notes from today’s class from Angela._

The presence of the semicolon in the second sentence completely changes the meaning of the sentence; in the first sentence, the dog is getting the notes from Angela – in the second, the implicit subject is the person to whom the sentence is addressed.  Computer languages like JS in particular are very sensitive to this kind of detail - for this reason, it is important to know what elements the language you are learning is built out of, and to cultivate corresponding habits that will make your coding life easier.

## Computer Languages in General

Pretty much every computer language I can think of – and I’ve written reasonably large programs in seven or eight of them – involves some basic elements that you will be working with here.  So that we can have a common language of discourse, I’m going to introduce the ones I’m thinking might be most helpful where we are right now – these may be defined more formally as we move on, but having words for these concepts will help you ask better questions and get better answers.

Please don’t treat this material as something you have to memorize.  I’d like you to have it to refer to when you’re trying to make sense of your materials and lectures.

(I may have made mistakes in this document – please feel free to point them out and I’ll correct them)

### Some Terms

#### General Programming Concepts and Tools

* **Module** – a module is the basic unit of work that you will design, develop, test, and then submit for a grade or as your contribution to a larger project.  Mostly we will use the terms ‘module’ and [computer program] ‘file’ synonymously – but in the examples you are working on in App Academy Open, the web page that you are editing your code in is a kind of module – the whole thing is treated as a single collection of instructions, and run together as a set.

* **Compiler** / **Interpreter** – both of these terms relate to a computer program that is itself trying to make sense of your program.  The difference between the two is somewhat arbitrary IMO – a compiler scans your completed module and builds from it something that the machine understands more directly; an interpreter looks at each line of code separately and uses that information to build up the program piece by piece.  For our purposes, there is no significant difference between these two; you can run JS or Python in a REPL loop, the same way you can the shell in your command prompt, whether you use bash (Linux) or zsh (Mac) or cmd (Windows).

NOTE: You may see or hear the term ‘JIT’, which means “Just In Time” [Compiler]; this muddies the waters even further.  For our purposes this is a distinction without a difference – an employer may ask you if Python is compiled or interpreted, but even this simple question doesn’t have a simple answer – for now, don’t worry about it.

tl;dr: these both refer to a program that reads and executes _your_ program.  (A **linker** is another tool related to compiling; some programs are compiled to object modules that need to be linked before they can be executed)

* **Parser** – a parser is a tool that accepts a module as input and produces one or more machine-readable data structures to represent the module in a way that the computer can work with.  You will generally not have to worry about a parser on its own (unless you have to write one), but you will use them all the time, as the are the first component of an interpreter or compiler or other tools like linters (see below).

* **Editor** – the editor is the program you use to compose and update the document that is your module.  In your App Academy Open work so far, the editor you have used is implemented as a part of your web browser.  For much of this course you will be using the editor in the VS Code environment; you will also use text-mode editors like vi/vim and/or nano, and you may also learn others.  Modern code editors that are aware of the language you are writing in will give you syntax highlighting – color and formatting clues that will make your life much, much easier – learn to pay attention to them!

* **Linter** – a linter is a tool that looks at your code “statically”, while it is still in the proverbial parking lot.  (The term comes from the idea of removing lint from your clothing before you wear it)  At present you don’t have to do anything to access the features of your linter, besides paying attention to the color and indentation cues that your editor gives you. A good linter will make your life much, much easier – I cannot tell you how many hours I have wasted that would have been saved by having some curiosity about why my editor was putting a red checkmark or an orange underline on my code!  (Your editor will often use a linter to generate syntax highlighting – later, you will encounter stand-alone linters that are used to check your code before submitting it for deployment)

* **Debugger** – in contrast to the _linter_, which looks at your code before it is running, a debugger looks at your code as it executes.  We haven’t done anything with a debugger yet, although what we’re doing with console.log() is a form of debugging – you will get lots more experience with debugging and the tools to do it as the program advances.  (**Profilers** and **code coverage tools** are related tools to evaluate aspects of your code – don’t worry about these for now!)

* **IDE** (Integrated Development Environment) – an IDE is a combination of one or more editors, linters, and shortcuts to compilers, linkers and various debugging tools.  VS Code and Eclipse are examples of GUI (Graphical User Interface) IDEs; the EMACS ‘editor’ is an example of a character-based IDE.

#### Generic Terms Specific to Programming

* **Atom** – the first thing that happens when a linter or execution environment (compiler/interpreter) examines your code it that it is _parsed_ (by a parser!) into atoms.  These are the ‘words’ that your instructions to the machine are formed from – if the machine can’t parse your intentions, it can’t execute them.

* **Namespace** – every atom takes its meaning in the context of its namespace; when an atom occurs the second (or third) time, the system will assume that if refers to the same atom that was encountered previously.
(Keywords and symbols are added to the namespace before your code is examined; literals and identifiers are added when you introduce them – see below)
(Scope is a concept related to namespaces – you will be meeting up with scope in JS in the very near future!)

* **Keyword** / **Reserved Word** – a _reserved word_ is an atom (word or phrase) that the language will not let you repurpose – either it has a specific meaning, and is a keyword that is part of the formal language – or it is being held aside for future use (typically) or because of past use (this kind of dead space for old words and functionality is generically termed ‘deprecation’, and old words and features are said to be ‘deprecated’)

* **Symbol** (not to be confused with the JS type _`Symbol`_!) – a generic symbol is an atom that the system interprets in a defined way, similar to a reserved word.  Generally, these are all the punctuation marks and mathematical operators that you will love and hate in every language you will learn.  Symbols are often one-character long, but need not be - `===` is a three-character long symbol in JS.

* **Literal** – a _literal_ is a *string* or *number* or *date/time* or *boolean* or other special value (languages typically have one or more flavors of nothing, in particular!) that can be expressed.  Like keywords and symbols, literals have a single specific meaning that you cannot change.  Unlike keywords and symbols, you add specific literals to your code in order to load, test for, or display these values.

* **Identifier** – an _identifier_ is anything that isn’t a *reserved word* or a *symbol* or a *literal*; identifiers are often just called _names_.  Identifiers denote the variables (and parameters and constants) that you will build your code out of.  Every language has rules for naming variables, and they aren’t all the same.  Generally also, there will be coding conventions observed in your language and in your school or workplace that will dictate how you should name your variables.  (Also files, classes, functions and programs, etc – it’s a big world of names!)

* **Expression** – an _expression_ is _an ordered sequence of atoms that can be evaluated_ – that is to say, resolved to a specific value.

* **Conditional** – a _conditional_ is just an expression that is interpreted as true or false; the actual form of the expression might in other contexts print as a string or a numerical value, but when it is interpreted as a conditional that is condensed to a simple yes-or-no value.  Conditionals appear in flow control statements like if and while statements, as well as other contexts; they control the flow of execution and select between alternate assignments (see below).

* **Assignment** – an _assignment_ is an operation that evaluates an _expression_, which is generally on the right side of the _operator_ (in JS and Python, a single equals sign (`=`)), and _assigns_ the results of the evaluation to the identifiers listed on the left side of the operator.

* **Assignment Expression** - an _assignment expression_ is an assignment that itself can be evaluated to the values on the left side of the assignment operator.  In the C and C++ programming languages, this is how simple assignment works; in Python as of version 3.8 the assignment expression operator is `:=`.

* **Declaration** – a _declaration_ is an expression that adds a name (of your creation) to the program.  Declarations can be explicit (via the let, const and var keywords in JS) or implicit, as in the case of parameters to a function.

* **Statement** – a _statement_ is the programming equivalent of a sentence.  That is, it is a complete thought that must be considered as a whole to make sense.  (The English sentences at the beginning of this essay are actually examples of a single run-on statement and two statements separated by a semicolon)
If an atom is the smallest part of your program that the parser will deal with, a statement is the smallest part that has a stand-alone meaning. Statements are composed of expressions, conditionals, declarations, assignments.

* **Block** – a block is a (possibly empty) ordered list of statements.  From the perspective of the program outside of a block, the entire block is a single (compound) statement.  In many languages (including JS) blocks are delimited with curly-braces (‘{}’).  (But not all of them – Python delimits blocks via indentation!)

* **Function** – a _function_ is a _block_ – usually but not always named – that is associated with a (possibly empty) list of _names_ – the _parameters_ – that will be assigned values when the function is _called_, or _invoked_.

* **Array** (also **List**, **Tuple**) – an array is an ordered collection of elements which can be referenced via an integer.  Arrays have a length property, and their contents are accessed by a process known as indexing, often denoted by placing a special value – the index – in square brackets - (‘[]’).  JS like most programming languages starts the counting (bases arrays) at zero – that is, the index is the number of steps you have to take from the first element to get to the indexed element.

* **Object** (also **Class**, **Struct**, **Union**, **Record**) – most modern programming languages have some mechanism to support associating related collections of data and code into a container that acts as a namespace, and provides a _context_ for code to run in.
(JS has objects, much more about these soon!)

* **Method** – a _method_ is a _function_ with an _object_ for _context_.  Much more on this in the near future.  In **Object Oriented (OO)** languages, methods are explicitly defined as functions associated with classes.
(Note: JS is very different from many other languages in this regard; If you know inheritance because you know Java or Python or C++, you’d probably best set your prior understanding aside while you learn JS!)

#### Why all of these definitions? / What About this applies to Learning JavaScript?

All of this has general implications for how to approach coding, and some very specific ones that will make your life with JavaScript much easier.

**(0) Recognize that your code is composed of Statements**

Assuming you are not getting a parse or other compile-time error, your code will be entirely composed of well-formed statements.  Conversely, if you are getting such errors, you have an error in a statement somewhere.  Statements must be clearly delimited – that is, separated in a way that lets the system tell where one ends and the next one begins.  In JavaScript, the statement delimiter is the semicolon - ‘;’ - get used to typing it a lot; a missing semicolon can cause you confusion and pain, and extra ones are generally harmless.

**(1) Blocks are delimited by curly braces (as are objects!)**

Blocks in JS contain statements that are internally delimited by semicolons.  For this reason, you do not have to follow the last statement in a block with a semicolon, as the closing curly brace will end the block.  The entire block itself is also a statement, and for that reason it may need a semicolon to follow it; in general a trailing semicolon won’t hurt anything.

**(2) Objects in JS are _also_ defined using curly braces.**

JS objects contain key:value pairs rather than statements – the tl:dr; is:

* _**if**_ the elements inside the curly braces are separated by _**semicolons**_, you are looking at a _**block**_ (and possibly the body of a function or loop, or a branch of a conditional)
* _**if**_ the elements are separated by _**alternating colons and commas**_, you are looking at an _**object**_.

**(3) Flow control statements always have one or more conditionals, and _exactly one_ controlled statement for each branch.**

This is a subtle feature that is important to understand and then mostly avoid – I will explain…

You have been taught to write a for loop like this:

    for (let index = 0; index < array.length; index++){
      if (array[index] === target){
        return true;
      }
    }

It is important to understand that this also would work exactly the same way:

    for (let index = 0; index < array.length; index++)
      if (array[index] === target)
        return true;

There is something subtle going on here, as I said before, and though the lower example looks ‘cool’, if you code in this way you are quite possibly going to confuse yourself hard.  The reason the second example works the same as the first one – the reason the curly braces aren’t required (by JS) – is that the loop body is logically a single statement (in both cases), it’s just that the ‘statement’ in the top case is a compound statement – a block.

Consider what would happen if you wanted to use console.log to see what this function is doing:

    for (let index = 0; index < array.length; index++){
      console.log(“testing “, array[index], “ to see if it is “, target);
      if (array[index] === target){
        return true;
      }
    }

This code will log out what is happening with each element of the array.  But now think about this:

    for (let index = 0; index < array.length; index++)
      console.log(“testing “, array[index], “ to see if it is “, target);
      if (array[index] === target) // the indentation here is misleading -
        return true;  // because the `if` is at the same level as the `for`!

This code will throw a _reference error_, because the console.log() statement becomes the _entire body_ of the _for_ loop – so that when we get to the conditional of the _if_ statement, _index_ isn’t defined anymore!

So the take home is – this is heart advice – always-always-always type the three characters `{};` *immediately* after you type the closing parenthesis for either a parameter list in a function definition or a conditional.  (VS Code and other editors will often help you with this - don't fight with them!)

The _only_ reason to dismiss this advice is if you are *really* sure you know what you are doing, and/or are willing to hear, _“didn’t I mention that you probably shouldn’t … ?”_ when you ask why you code doesn’t work.  (I speak from experience; I've confused myself!)

**Full Disclosure** – this one-liner statement thing works in C/C++ where I learned it, and in Python, where a variant of it - single statement on the same line as the conditional - is considered by the original author of the language to be an extremely bad pattern.  (He lists it among his 'regrets'!)  So *I* use it fairly freely, mainly because I'm used to it - but like smoking, that doesn't mean that *you* should do it!  Sometimes it makes your code cleaner and easier to read – but this comes at the expense of making your code more susceptible to a kind of error that is hard to spot – especially if you are not in the habit of paying attention to what your linter is trying to tell you about indentation!)
