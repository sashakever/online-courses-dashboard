
export default class CoursesService {

  dataCourses = [
    {
      id: 1,
      title: 'Learn Figma',
      author: 'by Christopher Morgan',
      duration: '6h 30min',
      created: '01.01.2020',
      top: '4',
      rating: '4,9',
      coverImage: require('../source/img/icons/ico_01.png').default//'../source/img/icons/ico_01.png'
    },
    {
      id: 2,
      title: 'Analog photography',
      author: 'by Gordon Norman',
      duration: '3h 15min',
      created: '01.02.2019',
      top: '3',
      rating: '4,7',
      coverImage: require('../source/img/icons/ico_02.png').default
    },
    {
      id: 3,
      title: 'Master Instagram',
      author: 'by Sophie Gill',
      duration: '7h 40min',
      created: '03.03.2019',
      top: '2',
      rating: '4,6',
      coverImage: require('../source/img/icons/ico_03.png').default
    },
    {
      id: 4,
      title: 'Basics of drawing',
      author: 'by Jean Tate',
      duration: '11h 30min',
      created: '04.04.2020',
      top: '1',
      rating: '4,8',
      coverImage: require('../source/img/icons/ico_04.png').default
    },
    {
      id: 5,
      title: 'Photoshop - Essence',
      author: 'by David Green',
      duration: '5h 35min',
      created: '01.05.2021',
      top: '0',
      rating: '4,7',
      coverImage: require('../source/img/icons/ico_05.png').default
    },
  ];

  getCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataCourses);        
      }, 500);
    });
  }
  
  dataUser = 
  {
    id: 1,
    login: 'SeperUser',
    password: 'React2021',
    name: 'Josh',
  };
  
  dataUserTest = 
  {
    id: 2,
    login: '1',
    password: '1',
    name: 'Josh',
  };
  
  getUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((this.dataUser.login !== user.login.trim()) &&
          (this.dataUser.password !== user.password.trim())) {
          reject(new Error('User login or password is wrong'))
        } else {
          resolve(this.dataUser);
        }
      }, 100);
    });
  }

    dataCoursesByUser = [    
    {
      id: 2,
      title: 'Analog photography',
      author: 'by Gordon Norman',
      duration: '3h 15min',
      rating: '4,7',
      progress: '36%',
      coverImage: require('../source/img/icons/ico_02.png').default
    },
    {
      id: 3,
      title: 'Master Instagram',
      author: 'by Sophie Gill',
      duration: '7h 40min',
      rating: '4,6',
      progress: '52%',
      coverImage: require('../source/img/icons/ico_03.png').default
    },
    {
      id: 4,
      title: 'Basics of drawing',
      author: 'by Jean Tate',
      duration: '11h 30min',
      rating: '4,8',
      progress: '93%',
      coverImage: require('../source/img/icons/ico_04.png').default
    },
  ];

  getCoursesByUser(user) {
    return new Promise((resolve, reject) => {
      resolve(this.dataCoursesByUser);
    });
  }
  
}