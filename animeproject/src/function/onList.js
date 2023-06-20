export default async function onList(id, userList){
    return userList.some((val) => val.id === id)
}