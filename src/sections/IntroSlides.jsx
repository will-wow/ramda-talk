import React from "react";

import {
  Heading,
  Link,
  List,
  ListItem,
  Notes,
  Slide,
  SlideSet,
  CodePane
} from "spectacle";

import NoteList from "../elements/NoteList";

import curryAddJs from "../code/curryAdd.js";
import curryAddSalesTax from "../code/curryAddSalesTax.js";
import curryAddSalesTaxToAll from "../code/curryAddSalesTaxToAll.js";
import addSalesTaxForTen from "../code/addSalesTaxForTen.js";
import addSalesTaxForTenCompose from "../code/addSalesTaxForTenCompose.js";
import addSalesTaxForTenPipe from "../code/addSalesTaxForTenPipe.js";
import addSalesTaxForTenWithRounding from "../code/addSalesTaxForTenWithRounding.js";
import marbleModel from "../code/marbleModel.ts";
import redsEs6 from "../code/redsEs6.js";
import redsRefactor1 from "../code/redsRefactor1.js";
import redsRefactor2 from "../code/redsRefactor2.js";
import filterMarblesEs6 from "../code/filterMarblesEs6.js";
import filterMarblesRefactor1 from "../code/filterMarblesRefactor1.js";
import filterMarblesRefactor2 from "../code/filterMarblesRefactor2.js";
import favoriteColorTypes from "../code/favoriteColorTypes.js";
import favoriteColorImperative from "../code/favoriteColorImperative.js";
import favoriteColorPipeline from "../code/favoriteColorPipeline.js";
import favoriteColorOutput from "../code/favoriteColorOutput.js";
import favoriteColorPipelineGroupBy from "../code/favoriteColorPipelineGroupBy.js";
import favoriteColorPipelineMap from "../code/favoriteColorPipelineMap.js";
import favoriteColorPipelineToPairs from "../code/favoriteColorPipelineToPairs.js";
import favoriteColorPipelineSortBy from "../code/favoriteColorPipelineSortBy.js";
import favoriteColorPipelineLast from "../code/favoriteColorPipelineLast.js";
import favoriteColorPipelineHead from "../code/favoriteColorPipelineHead.js";
import favoriteColorPipelineNames from "../code/favoriteColorPipelineNames.js";
import immutableDeepUpdateData from "../code/immutableDeepUpdateData.js";
import immutableDeepUpdateLame from "../code/immutableDeepUpdateLame.js";
import immutableDeepUpdateRamda from "../code/immutableDeepUpdateRamda.js";

export default (
  <SlideSet>
    <Slide>
      <Heading
        size={2}
        caps
        lineHeight={1}
        textColor="secondary"
        margin="1rem 0"
      >
        Say what you mean: Declarative Programming with Ramda
      </Heading>

      <Heading fit caps textColor="tertiary">
        Will Ockelmann-Wagner | @WowItsWillWow | wow@carbonfive.com
      </Heading>

      <NoteList
        notes={[
          "hi I'm will",
          "ramda is a functional utility library for javascript",
          "functional, declarative, compositional style of programming"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2}>What makes Ramda different</Heading>

      <List>
        <ListItem>Curried by default</ListItem>
        <ListItem>Data-last</ListItem>
        <ListItem>Composable</ListItem>
        <ListItem>Immutable</ListItem>
      </List>

      <NoteList
        notes={[
          "utility lib like lodash or underscore",
          "has a bunch of useful functions that operate on lists and objects",
          "curried by default, data-last, composable, immutable"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2}>Currying</Heading>
      <Heading size={3}>Under the hood</Heading>

      <CodePane textSize="2rem" lang="javascript" source={curryAddJs} />

      <NoteList
        notes={[
          "Currying. Currying is a technique (named after the mathematician Haskell Curry, and not the delicious food) that says that if you have a function that takes say two arguments, if you called it with one argument, you'd get back a function that's waiting for the second argument. Once you pass in that second argument, the functions returns as normal.",

          "Currying is really similar to partial application, which you may have used with something like lodash dot partial.",

          "Currying combines the two functions you see here.",

          "Since add is curried, add(1)(2) does the same thing as add(1, 2)",

          "Currying is a pretty simple concept, but it can unlock some pretty powerful techniques."
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2}>Curried by Default</Heading>

      <CodePane textSize="2rem" lang="javascript" source={curryAddSalesTax} />

      <Notes>
        We can see what currying actually does for us here. Sales tax in Santa
        Monica is 10.25%. So if I wanted a function that adds sales tax to a
        price, in the first example without Ramda, I would do it in the normal
        way - take a number and multiply it by one point ten 25. But the ramda
        has a curried multiply function - so when I pass only one argument to
        it, I get back a function exactly like the first example - it takes in a
        number, and sales tax to it. But I was able to do that is this really
        concise, declarative way - addSalesTax literally is just multiply by 1
        point ten 25, and currying lets me say that. One thing to note is that
        lodash (like ramda) also has a curry function that takes a normal
        function and makes it curried, so you can use this same technique with
        lodash. It’s just not on by default, and as we’ll see in a second, not
        as useful with lodash.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>Data-Last</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={curryAddSalesTaxToAll}
      />

      <Notes>
        Data-last. With lodash, most functions take the data they’re operating
        on as the first argument, and the function doing the work as the second
        argument. So for instance map is a well-known function that takes an
        array, applies a function to every item in the array, and returns the
        results as a new array. So we can pass map an array of numbers, then
        pass our sales tax function from the last slide, and get an array of
        prices with sales tax. Easy enough. With ramda, the order of arguments
        is reversed - we pass the function first, then the array. It’s a small
        change, but because of that, map being curried becomes a lot more
        useful. Now we can pass the sales tax function from the last slide to
        map, and we're done. When addSalesTaxToSum gets passed an array, it’ll
        apply that function to each item and return an array.
      </Notes>
    </Slide>
    <Slide>
      <Heading size={2}>Composable</Heading>

      <CodePane textSize="2rem" lang="javascript" source={addSalesTaxForTen} />

      <Notes>
        So the curried functions are kind of cool, because they save you some
        keystrokes. Fine. That’s nice, but probably not worth a whole new
        library. The power of ramda comes with function composition. Because
        it’s easy to define functions as partial applications of other
        functions, it's easy to put together a set of functions that are all
        awaiting final data argument, like add(1), and compose them together in
        a chain. Let's see how that actually looks. So in this non-ramda code,
        we've got a function that takes a prices, multiplies it by 10, then
        calculates sales tax for the whole thing. Anyway as a ramda developer, I
        see a code smell. I'm taking an argument, prices, and passing it as the
        last argument to a function, and then wrapping that whole thing as the
        last argument to another function. And once you start looking for this
        pattern, you'll start seeing it everywhere. It means that we can
        refactor this code into a function composition. So what's that look
        like?
      </Notes>
    </Slide>
    <Slide>
      <Heading size={2}>Composable: Compose</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={addSalesTaxForTenCompose}
      />

      <Notes>
        Using ramda's compose function, we can chain the functions together,
        without ever having to actually get a hold of the parameter or use the
        function keyword. Starting from the end, sum gets passed the numbers
        array, then passes its return value to multiply 10, and so on if there
        were more. In the Haskell language (another thing named after Haskell
        Curry), which Ramda takes a lot of inspiration from, this sort of
        composition is called "point-free style", because the parameters, or
        "points", are never formally declared.
      </Notes>
    </Slide>
    <Slide>
      <Heading size={2}>Composable: Pipe</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={addSalesTaxForTenPipe}
      />

      <Notes>
        Another option is to use pipe instead of compose. It works exactly the
        same, but flips the order - multiply comes first instead of last (which
        doesn't matter in this case, but whatever). Compose is great for
        refactoring, because you can see how easy it is to go from the first
        version to the second version - just move some parentheses around. Pipe,
        we've found, is easier to read later - reading functions left-to-right
        is a lot more natural for english speakers. Which you use is really just
        a matter of preference. So why is this actually useful? Well other that
        being arguably more beautiful, it keeps the focus on the functions,
        instead of the values being passed through. It can also be a lot easier
        to maintain. For instance, addSalesTax doesn't round to the nearest
        penny. How can we add that in?
      </Notes>
    </Slide>
    <Slide>
      <Heading size={2}>Composable: Maintainable</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={addSalesTaxForTenWithRounding}
      />

      <Notes>
        Given a roundToCents function, with pipe it's easy - we add it to our
        pipeline, and now our answers are rounded. Nice and easy, and much
        better than having to insert it into some deeply nested function calls.
      </Notes>
    </Slide>

    <Slide>
      <Heading>Lodash/FP</Heading>

      <Notes>
        If all this is sounding familiar to you, I should mention is that lodash
        actually comes with something really similar to ramda, called lodash/fp.
        It's all the normal lodash functions, but with the curryed-by-default,
        data-last stuff. It works pretty well, and if you're used to lodash the
        function names might be more familiar. It's a reasonable alternative,
        though it doesn't have the same focus on immutability that we'll see
        later.
      </Notes>
    </Slide>

    <Slide bgImage="./img/hipster.jpg" bgSize="contain" bgRepeat="no-repeat">
      <Notes>
        So anyway maybe all this is cool, but tragically we’re not being paid to
        write cool code. We get paid to write software that is correct, and that
        is easy to maintain. So what I want to do next is go through a small
        scenario that might be similar to something you’d do at work, though of
        course a lot simpler. That way, we can see how ramda can make our lives
        a little easier when building, maintaining, and refactoring our actual
        code.
      </Notes>
    </Slide>

    <Slide bgImage="./img/marbles.jpg" bgSize="contain" bgRepeat="no-repeat">
      <Heading size={1} textColor="white">
        Marbl.ly
      </Heading>

      <Notes>
        So this is the scenario: we’re all working for a new startup, marbl.ly.
        And here’s the pitch: say you have a bag of marbles, with this app, if
        you tell it about your marbles, it will sort and count them for you, and
        then if you lose one, someone will bring you a new one. It’s like Uber
        for marbles, it’s going to be huge. But for now this is a startup, so
        we’re going to try to be agile about building this - we’ll start with
        something really simple to make sure we're on the right track, build up
        from there. We'll also start with standard ES6 code, and then refactor
        into a more compositional style.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>The Marble Model</Heading>

      <CodePane textSize="2rem" lang="typescript" source={marbleModel} />

      <Notes>
        Here’s the model for our app. This is a TypeScript interface; it
        describes the shape of an object, so elsewhere functions can say, “I
        only take arguments that match this interface.” And as you can see,
        there’s not a lot going on here. A marble has a size and a color, both
        of which are just strings like “large” or “red”. In TypeScript you
        declare a type for an object by putting it after a colon - so here we're
        saying that marble implements the marble interface. So we have marbles,
        and a bag of marbles is represented by just an array of these marble
        objects. What we’re going to be building as part of our MVP is a set of
        functions that take an array of marbles, and just filter and count them
        in different ways.
      </Notes>
    </Slide>

    <Slide bgImage="./img/red-marble.jpg" bgSize="contain" bgRepeat="no-repeat">
      <Heading size={1}>Red Marbles</Heading>

      <Notes>
        So where to begin? Well we want to build part of the core functionality
        first, so the product owners can get their hands on it as soon as
        possible. So maybe our first story is to just be able to find all the
        red marbles in the bag.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>red()</Heading>

      <CodePane textSize="2rem" lang="javascript" source={redsEs6} />

      <Notes>
        So first we... set up our complicated build pipeline because that’s step
        one with javascript these days. But then we pick up the story, and
        pretty soon we’ve got something reasonable. We take the array of
        marbles, and filter for the ones where color equals red. This should
        look pretty familiar to anyone doing ES6 development. It looks good, and
        certainly this is a lot better than something like a for loop - we’re
        talking about marbles and how to filter them, and not indexes and
        pushing and popping, which is great. So how can we refactor this with
        ramda?
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>reds(): refactor 1</Heading>

      <CodePane textSize="2rem" lang="javascript" source={redsRefactor1} />

      <Notes>
        Step one is probably to pull out that isRed function, and to use ramda’s
        filter instead of the native one. Now that we’ve done this, we can see
        that that pattern show up again - we’re just taking in marbles, and
        passing them as the last argument to filter. Since filter is curried, so
        we don’t need to declare this function at all! That leads to the second
        refactor:
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>reds(): refactor 2</Heading>

      <CodePane textSize="2rem" lang="javascript" source={redsRefactor2} />

      <Notes>
        Here we've dropped the function declaration entirely, and just declared
        reds as filter(isRed). Pretty nice.
      </Notes>
    </Slide>

    <Slide
      bgImage="./img/filtered-marbles.jpg"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Heading size={1}>filterMarbles()</Heading>

      <Notes>
        Okay, so we can find red marbles. We get that branch merged in, and pick
        up the next story - filter for any color or size marble.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>filterMarbles - ES6</Heading>

      <CodePane textSize="2rem" lang="javascript" source={filterMarblesEs6} />

      <Notes>
        If we wanted to do that in ES6, it would probably look something like
        this. We learned from our last Ramda refactor, so this time we extract
        this isMatchingMarble function to start with. And this time it takes in
        an attribute and a value, and checks if they match. Then our
        filterMarbles function just takes in all the data, and for each marble
        passes it along to the isMatchingMarble function. Since isMatchingMarble
        isn’t curried, this is kind of verbose, since we're taking in three
        parameters, and passing them directly to another function that also has
        to take three parameters. Still, pretty reasonable, and now we can run
        filterMarbles with marbles, color, red, to recreate our old reds
        function. But we can do better: let’s see what ramda can do to clean
        this up.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2} fit>filterMarbles: refactor</Heading>

      <CodePane textSize="2rem" lang="javascript" source={filterMarblesRefactor1} />

      <Notes>
        So first of all - Ramda actually supplies a propEquals function that
        does the same thing as our isMatchingMarble function - it takes an
        attribute like color and a value like red, and an object, and sees if it
        has a color red or whatever. But it's curried for easier use. So we can
        drop that function entierly.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2} fit>filterMarbles: refactor</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={filterMarblesRefactor1}
      />

      <Notes>
        Unfortunately, because we have to pass attribute and value to an
        interior function call, this can't be a point-free function - we have to
        actually declare our formal parameters and pass them around.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2} fit>filterMarbles: refactor</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={filterMarblesRefactor2}
      />

      <Notes>
        But, we wrapped Ramda's curry function around our function deceleration.
        That means that like with the library functions, we can call
        filterMarbles color, red to re-create the function that pulled out red
        marbles, which is nice. But we could also make a function that takes a
        color and a marble array, or just call the whole thing at once.
      </Notes>
    </Slide>

    <Slide
      bgImage="./img/green-marbles.jpg"
      bgSize="contain"
      bgRepeat="no-repeat"
    >
      <Heading size={1} textColor="white">Favorite Color</Heading>

      <Notes>
        Okay, so by now hopefully you're feeling pretty good on function
        currying and composition. So for the last example, let's try something a
        little more complicated. Our next story is to build a favorite color
        feature - we want to search through a user's bag of marbles, find the
        most common color, and return it. Not too crazy, but this will definitly
        take a little more logic than the other examples.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>favoriteColor Types</Heading>

      <CodePane textSize="2rem" lang="javascript" source={favoriteColorTypes} />

      <Notes>
        Before we go on to the ramda answer, can anyone tell me an approach on
        how you would solve this? Here's some sample data, and how the out
        favoriteColor function should work, if that helps. I'll give you a
        moment to think about it, and don't worry if your idea is only
        half-baked - if you're answer is too good, you won't be impressed by the
        ramda solution!
      </Notes>
    </Slide>

    <Slide>
      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorImperative}
      />

      <Notes>
        Here's my imperative solution. It's not really that interesting to take
        a close look, but there are a couple loops, some mutation, and a couple
        conditionals. You could probably make it more functional with reduce,
        and more readable by extracting some functions. Whatever, I don't want
        to program like this anymore anyway. Let's see what this looks like in
        ramda.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>favoriteColor() pipeline</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorPipeline}
      />

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorOutput}
      />

      <Notes>
        So unlike the previous examples, this looks nothing like the imperative
        solution. It's also pretty dense, so let's walk through what's going on
        here.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>favoriteColor() pipeline</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorPipeline}
      />
      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorOutput}
      />

      <Notes>
        First, we're again using the pipe function we saw at the beginning of
        the talk, so our marbles go into groupBy, and its output goes into
        mapObjIndexed, and so on, until it returns. So what's happening here?
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>favoriteColor() pipeline: prop</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorPipeline}
      />
      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorOutput}
      />

      <Notes>
        First, prop is a ramda function that extracts an attribute from an
        object, so calling prop('color') on a marble would get you back "red".
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>favoriteColor() pipeline: groupBy</Heading>

      <CodePane
        textSize="1.5rem"
        lang="javascript"
        source={favoriteColorPipelineGroupBy}
      />

      <Notes>
        GroupBy is a function that does mostly the same thing as the first part
        of the imperitive solution - takes an array of marbles, and a function
        that gets colors from marbles, and turns it into a dictionary where the
        keys are colors and the values are arrays of the matching marbles. Given
        the sample data at the bottom, this is what groupBy would return - the
        same marbles, but grouped by their color prop. And hey, that's exactly
        what the code says it would do!
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>favoriteColor() pipeline: map</Heading>

      <CodePane
        textSize="1.75rem"
        lang="javascript"
        source={favoriteColorPipelineMap}
      />

      <Notes>
        Ramda's map works on objects, and returns an object with the same keys
        and updated values. Passing the array counting function "length"
        transforms dictionary of marble arrays into dictionary of marble counts.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>favoriteColor() pipeline: toPairs</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorPipelineToPairs}
      />

      <Notes>
        Next we use toPairs to transform the key-value combinations to an array
        of arrays of [color, count]. In other functional languages you'd use a
        tuple instead of a pair, but we're in javascript, so close enough. In
        any case, this will let us sort the arrays.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>favoriteColor() pipeline: Sort By</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorPipelineSortBy}
      />

      <Notes>
        Here, we're sorting the arrays by count. "Last" just gives us the last
        item in an array, which in this case for each element is the count.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>favoriteColor() pipeline: last</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorPipelineLast}
      />

      <Notes>Then we use last again to get the higest count</Notes>
    </Slide>

    <Slide>
      <Heading size={2}>favoriteColor() pipeline: head</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorPipelineHead}
      />

      <Notes>
        And finally use head, which returns the first element in an array, to
        get the first element in the pair, the color. Done! So as you can see,
        using Ramda doesn't just allow you code to be shorter - it also pushes
        you towards somtimes radically different solutions than what would be
        easy to do without it. That said, I think that reasonable people could
        disagree on if they like this or the imeritive version more. For me,
        this is nice. It's certainly very functional, and I like the clear
        step-by-step process. It does rely on the pairs construct, which isn't
        super intuitive, the the last, last, head thing at the end is a little
        hard to follow, and it's dense enough that it'd probably be easy to get
        the types wrong somehow and let a bug in. Let's see if we can do
        something at least about the last two issues.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2} fit>favoriteColor() pipelines</Heading>
      <Heading size={2}>Named Functions</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={favoriteColorPipelineNames}
      />

      <Notes>
        So there's an easy fix to the last last head thing being confusing -
        declare more relevant names for the functions! This assignment is
        basically free, and I think it makes what the pipeline does a lot more
        obvious. But even with that, you could imagine this being pretty hard to
        debug during development. You have to keep in your head what each
        function returns, to make sure that the next function takes the right
        kind of data. And it can be easy to make mistakes - for instance, if you
        forgot that the normal map function doesn't work well with objects, and
        used it instead of mabObjIndexed, it might take a while to track down
        why your function wasn't working. Happily, matching up types is
        something compilers are good at. So if we introduce TypeScript, our job
        gets a lot easier.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={1}>Immutable Deep Updates</Heading>

      <Notes>
        Other than nice functional pipes, the other big win with ramda is
        immutable updates
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>Immutable Deep Updates: Shape</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={immutableDeepUpdateData}
      />

      <Notes>
        Let's say you have this complicated data structure. They just got a job
        at this office (lucky them) and want to update the user's second street
        address.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>Immutable Deep Updates: Lame</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={immutableDeepUpdateLame}
      />

      <Notes>Mutation, clone, spread</Notes>
    </Slide>

    <Slide>
      <Heading size={2}>Immutable Deep Updates: Amazing</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={immutableDeepUpdateRamda}
      />

      <Notes>
        AssocPath for a single update, mergeDeepRigth or Left for multi-update
        Effecient becasue copy-by-value, fine if you always use ramda.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={2}>Other Cool Stuff</Heading>

      <List>
        <ListItem>lenses</ListItem>
        <ListItem>ifEquals/cond</ListItem>
        <ListItem>Fantasy Land</ListItem>
        <ListItem>Searchable Docs</ListItem>
      </List>

      <Notes>
        Okay, so that's probably enough for one talk. But there's a lot more in
        ramda to dig into, if you're interested. - Lenses are a way of creating
        functions that can get and set deeply nested data without mutation,
        which can be great for something like redux. - ifEquals and cond are
        functions that can let you embed conditional logic in your pipelines -
        FantasyLand is interesting - it's a set of interfaces for functional
        constructs like Monads and Functors. If that's something that you're
        interested in, ramda supports fantasy land, so map can map over any
        FantasyLand-compliant functor, for instance. If that doesn't mean
        anything to you, don't worry, you don't have to know about that stuff to
        get a lot out of ramda. - Finally, since there are so many functions,
        it's helpful that the docs are pretty good. The official API docs are
        pretty extensive, and they also have this nice "what function should I
        use" page that I find really useful.
      </Notes>
    </Slide>

    <Slide>
      <Heading size={1}>Wrapping Up</Heading>

      <Notes>
        So! Hopefully that was a good taste of what programming with Ramda is
        like. It's a pretty different and fun way to program, and is a way to
        get a lot of the benefits of a super functional langage like Haskell or
        Elixir, but within an existing javascript project. As we've seen, it's
        also usually pretty straightforward to refactor a lodash function into a
        ramda one, so this is definitely something you can start using today, if
        your team is up for it.
      </Notes>
    </Slide>

    <Slide bgImage="./img/do-it.gif" bgSize="contain" bgRepeat="no-repeat" />

    <Slide>
      <Heading size={1}>Thanks!</Heading>
    </Slide>
  </SlideSet>
);
