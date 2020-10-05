const ADD_POST = "ADD_POST";
const CHANGE_POST = "CHANGE_POST";

export const actionCreatorAddPost = () => {
    return { type: ADD_POST }
}
export const actionCreatorChangePost = (text) => {
    return { type: CHANGE_POST, newText: text }
}

const initialState = {
    postsData: [
        {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: `First post text`,
            like: 13
        },
        {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: `Second post text`,
            like: 21
        },
        {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: `Third post text`,
            like: 8
        },
        {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: `Fourth post text`,
            like: 5
        },
        {
            avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
            text: `Fifth post text`,
            like: 21
        }
    ],
    newPostText: 'Placeholder'
};

const profileReducer = (store = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                avatar: `https://coubsecure-s.akamaihd.net/get/b81/p/coub/simple/cw_timeline_pic/691c3a60c6a/d02de237a879bceafbd0e/med_1542127707_image.jpg`,
                text: store.newPostText,
                like: 0
            }
            store.postsData.push(newPost)
            store.newPostText = ''
            return store
        case CHANGE_POST:
            store.newPostText = action.newText;
            return store
        default:
            return store
    }
}

export default profileReducer;