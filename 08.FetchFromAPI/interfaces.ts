//Show paste JSON as code
//Show code form

// Generated by https://quicktype.io

// Generated by https://quicktype.io

// export interface APIResponse {
//     userId:    number;
//     id:        number;
//     title:     string;
//     completed: boolean;
// }

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

function fetchToDo<T>(resourceUrl: string): Promise<T> {
    return fetch(resourceUrl).then(response => {
        // fetching the reponse body data
        return response.json()
      })
  }

  // Consuming the fetchToDo to retrieve a Todo
fetchToDo<Todo>("https://jsonplaceholder.typicode.com/todos/2")
.then((toDoItem) => {
  // assigning the response data `toDoItem` directly to `myNewToDo` variable which is
  // of Todo type
  let myNewToDo:Todo = toDoItem;
  // It is possible to access Todo object attributes easily
  console.log('\n id: '+ myNewToDo.id + '\n title: ' + myNewToDo.title + '\n completed: ' + myNewToDo.completed + '\n User Id: ' + myNewToDo.userId);
});

// Generated by https://quicktype.io

export interface Movie {
  dates:         Dates;
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Result {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: OriginalLanguage;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
}


interface StringByString {
  [key: string]: string;
}
 
const heroesInBooks: StringByString = {
  Gunslinger: 'The Dark Tower',
  'Jack Torrance': 'The Shining'
};