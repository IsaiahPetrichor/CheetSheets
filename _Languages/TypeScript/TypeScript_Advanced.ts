// Union Types
{
  // basic union types simply use the '|' character
  let aVar: string | number;

  aVar = 'asd';
  // type narrowing
  /* TypeScript will throw a fit if we dont verify the 
    type needed for certain methods */
  if (typeof aVar === 'string') {
    const lowerAVar = aVar.toLowerCase();
  }
  /* This is very useful when you need to accept multiple
    types for a function instead of writing multiple functions */

  /* TS will also infer return types, not only for functions 
    that only have one return type but also for union return types */
  function createThing() {
    return 0;
  }
  const numOrStr: number | string = createThing();

  // Unions are also useful in arrays
  const dateNumber = new Date().getTime();
  const dateString = new Date().toString();

  const listOfTimes: (string | number)[] = [dateNumber, dateString];

  /* TS without type narrowing will throw an error on a method
    if both types in the union dont have that method, but if they
    do then no error will be thrown */
  type Like = {
    username: string;
    displayName: string;
  };

  type Share = {
    username: string;
    // if we remove displayName then the function will throw an error
    displayName: string;
  };

  function getFriendNameFromEvent(event: Like | Share) {
    return event.displayName || event.username;
  }

  // Literal types are used for making distinct states
  type Status = 'idle' | 'downloading' | 'complete';

  function downloadStatus(status: Status) {
    if (status === 'idle') console.log('Download');
    if (status === 'downloading') console.log('Downloading...');
    if (status === 'complete') console.log('Your download is complete!');
  }

  downloadStatus('downloading');
}

// Type Narrowing
{
  // Type Guards
  function formatStatistic(stat: string | number) {
    // verify that its a number with a type guard
    if (typeof stat === 'number') {
      return stat.toFixed(2);
    }
    // do the same for a string
    if (typeof stat === 'string') {
      return stat.toUpperCase();
    }
  }

  // More effectively use the 'in' operator for custom types
  type Cat = {
    name: string;
    run: () => string;
  };
  type Fish = {
    name: string;
    swim: () => string;
  };

  function exercise(pet: Cat | Fish) {
    if ('run' in pet) return pet.run();
    if ('swim' in pet) return pet.swim();
  }

  // Type guard with an 'else' instead of another 'if' (duh)
  function doStuffOne(input: number | string[]) {
    if (typeof input === 'number') return input.toFixed(2);
    else {
      input.forEach((str) => console.log(str.toUpperCase()));
    }
  }

  // if there is a return statement typescript will infer type
  function doStuffTwo(input: number | string) {
    if (typeof input === 'string') return input.concat('!');
    return input.toString();
  }
}

// Advanced object typing
{
  // interfaces are more constrained types that only work with objects
  interface Bonk {
    bing: string;
    bong: number;
    doBonk: () => void;
  }

  // create a class using the 'implements' keyword with an interface
  class SuperBonk implements Bonk {
    bing = 'bing bong';
    bong = 6;

    doBonk() {
      while (this.bong > 0) {
        console.log(this.bing);
        this.bong--;
      }
    }
  }

  // Deep types
  interface Directory {
    config: {
      default: {
        encoding: string;
        permissions: string;
      };
    };
  }

  // Composed types
  interface About {
    general: General;
  }

  interface General {
    id: number;
    name: string;
    version: Version;
  }

  interface Version {
    versionNumber: number;
  }

  // Extending Interfaces
  interface Developer extends Human {
    code: () => void;
  }

  interface Human {
    name: string;
    hobbies: string[];
  }

  const me: Developer = {
    code: () => console.log('Headphones on. Cappucino made. Editor open.'),
    name: 'Isaiah',
    hobbies: ['Gaming', 'Cuddling with Pets', 'Spending Time With Wife'],
  };

  me.code();

  async function fetchBudget() {
    return { asd: 5 };
  }

  // Index signatures
  /* When you don't know the name of a certain property you can use typed
	 signatures to continue to code without risk of unexpected property keys
	 causing errors */
  interface Budget {
    [category: string]: number;
  }

  async function getBudget() {
    const result: Budget = await fetchBudget();
    console.log(result);
  }

  // Optional type members
  interface Profile {
    // using the '?' before the ':' tells TypeScript it is optional
    firstName?: string;
    lastName?: string;
    username: string;
  }
}
