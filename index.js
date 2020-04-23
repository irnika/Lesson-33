

function Users(data) {
  if (!data) {
    throw new Error(`Укажите данные в new Users(data)`);
  }
  this.data = data;
}

Users.prototype.getUsers = function() {
  return this.data;
};

const users = new Users(data);

console.log(users.getUsers());

// ------------------------------------------------------------------------------------------------

/*
 * Найти пользователя по идентификатору (_id)
 * @param {String} id - идентификатор пользователя
 * @return {Object} - объект пользователя
 */
function getUserById(id) {}

// ------------------------------------------------------------------------------------------------

/*
 * Определить средний возраст пользователей
 * @return {Number} - средний возраст
 */

function getAverangeUsers() {}

// ------------------------------------------------------------------------------------------------

/*
 * Определить количество активных пользователей
 * @return {Array} - список активных пользователей
 */
function getActiveUsers() {}

// ------------------------------------------------------------------------------------------------

/*
 * Определить сколько пользователей мужского и женского пола
 * @return {Object} - { male: 10, female: 20 }
 */

function getUsersGender() {}

// ------------------------------------------------------------------------------------------------

/*
 * Определить самого старшего пользователя
 * @return {Number} - возраст самого старшего пользователя
 * @return {Object} - старшего пользователя
 */
function getOldestUser() {}

// ------------------------------------------------------------------------------------------------

/*
 * Определить самого младшего пользователя
 * @return {Number} - возраст самого младшего пользователя
 */
function getYoungestUser() {}

// ------------------------------------------------------------------------------------------------

/*
 * Сортировать пользователей по возрасту
 * @param {String} order - указываться asc или desc (по возростанию / по убыванию)
 * @return {Array} - список сортированных пользователей
 */
function sortUsersByAge(order) {}

// ------------------------------------------------------------------------------------------------

/*
 * Определить количество пользователей, которые любят определенный фрукт
 * @param {String} fruitName - название фрукта (apple)
 * @return {Array} - список пользователей, кто люит этот фрукт
 */
function getFavoriteFruit(fruitName) {}

// ------------------------------------------------------------------------------------------------

/*
 * Создать новых список пользователей на основе указаных аргументов
 * @param {Array} fields - список свойств(ключей) по которым нужно брать поля,
 * например ["name", "email", "phone", balance]
 *
 * @return {Array} - список активных пользователей
 */

function mapUsersByFields(fields) {
  return data.map(user =>
    fields.reduce((newUser, field) => {
      if (field in user) {
        newUser[field] = user[field];
      }

      return newUser;
    }, {})
  );
}

// console.log(mapUsersByFields(["name", "isActive"]));

// ------------------------------------------------------------------------------------------------

/*
 * Поиск пользователей по тегам
 * @param {Array} tags - список тегов(ключей) по которым выполняем,
 * @return {Array} - список пользователей у которых есть хотя бы один тег
 */

// function getUsersByTags(tagsParametr) {

//     const newUsers = [];

//     for(let indexUser = 0; indexUser < data.length; indexUser++) {
//         const user = data[indexUser];

//         outer: for(let indexUserTag = 0; indexUserTag < user.tags.length; indexUserTag++) {

//             const tagUser = user.tags[indexUserTag];

//             for(let indexTag = 0; indexTag < tagsParametr.length; indexTag++) {

//                 const tag = tagsParametr[indexTag];

//                 if(tagUser === tag) {
//                     newUsers.push(user.name);
//                     break outer;
//                 }
//             }

//         }
//     }

//     return newUsers
// }

// console.log(getUsersByTags(["nisi", "anim"]))

function getUsersByTags(tags) {
  const newUsers = data.filter(({ tags }) =>
    tags.reduce((isTag, userTag) => {
      tags.forEach(function(tag) {
        if (userTag === tag) {
          isTag = true;
        }
      });

      return isTag;
    }, false)
  );

  return newUsers;
}

/*
 * Какой общий баланс всех пользователей
 * @return {String} - $23,4344.10
 */
function getBalanceUsers() {}
