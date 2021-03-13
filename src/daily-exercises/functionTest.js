const onItemClickMy = (section) => {
console.log(section)
}

const onItemClick = section => () => {
console.log(section);
}

onItemClickMy('my')
onItemClickMy('his')