/* const musicLibrary = { 
    count: 2, 
    artists: [ 
      { 
        name: 'The Beatles', 
        albums: [ 
          { 
            title: 'Sgt. Pepper\'s Lonely Hearts Club Band', 
            year: 1967, 
            tracks: [ 
              { title: 'With a Little Help from My Friends', duration: '2:44' }, 
              { title: 'Lucy in the Sky with Diamonds', duration: '3:28' }, 
              { title: 'A Day in the Life', duration: '5:33' } 
            ] 
          }, 
          { 
            title: 'Abbey Road', 
            year: 1969, 
            tracks: [ 
              { title: 'Come Together', duration: '4:19' }, 
              { title: 'Something', duration: '3:01' }, 
              { title: 'Here Comes the Sun', duration: '3:06' } 
            ] 
          } 
        ] 
      }, 
      { 
        name: 'Pink Floyd', 
        albums: [ 
          { 
            title: 'The Wall', 
            year: 1979, 
            tracks: [ 
              { title: 'Another Brick in the Wall, Part 2', duration: '3:59' }, 
              { title: 'Comfortably Numb', duration: '6:23' }, 
              { title: 'Hey You', duration: '4:40' } 
            ] 
          }, 
          { 
            title: 'Dark Side of the Moon', 
            year: 1973, 
            tracks: [ 
              { title: 'Speak to Me/Breathe', duration: '3:58' }, 
              { title: 'Time', duration: '7:06' }, 
              { title: 'Money', duration: '6:22' } 
            ] 
          } 
        ] 
      }         
    ] 
}

let {
    count: count__two,
    artists: {
    albums[
       { title: title3,
        year: year3,
        tracks: title3
        }          { title: 'Speak to Me/Breathe', duration: '3:58' }, 
                    { title: 'Time', duration: '7:06' }, 
                    { title: 'Money', duration: '6:22' } 
                ]
            }
        ]

        

    }
} = musicLibrary

let {
    count: count__two,
    artists: {
    albums[
       { title: title3,
        year: year3,
        tracks: title3
        }          { title: 'Speak to Me/Breathe', duration: '3:58' }, 
                    { title: 'Time', duration: '7:06' }, 
                    { title: 'Money', duration: '6:22' } 
                ]
            }
        ]

        

    }
} = musicLibrary

let {
    count: count__two,
    artists: {
    albums[
       { title: title3,
        year: year3,
        tracks: title3
        }          { title: 'Speak to Me/Breathe', duration: '3:58' }, 
                    { title: 'Time', duration: '7:06' }, 
                    { title: 'Money', duration: '6:22' } 
                ]
            }
        ]

        

    }
} = musicLibrary

console.log(title1, duration10, title4, year3, title3) */

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  console.log(user)

  const countProps = function (obj) {
    // твій код
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(countProps({})); // 0
  
  console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

  console.log(countProps)

  const findBestEmployee = function (employees) {
    // твій код
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux

  console.log(findBestEmployee)