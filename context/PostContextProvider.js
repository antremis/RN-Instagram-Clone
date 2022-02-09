import React, {createContext, useContext, useState} from 'react'

const PostContext = createContext()

const PostContextProvider = (props) => {

    const [posts, setPosts] = useState([
        {
            imgurl : "https://instagram.fdel3-1.fna.fbcdn.net/v/t51.2885-15/e35/71514100_194818694869224_5662156442416686250_n.jpg?_nc_ht=instagram.fdel3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=8mwOiDCtCVoAX_96ksY&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjE1MzgxMjQ5ODgzMDM3NzkwNA%3D%3D.2-ccb7-4&oh=00_AT_unEo1_8rTlhVqu_2YRBdSmrl_GViTRlkQ7XWJiQp94g&oe=620B4E11&_nc_sid=30a2ef",
            user : {
                name : "Akash",
                image : "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/59475072_401165673812171_6271609677679689728_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=AKiCdiFuyGsAX8z_wl-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT81KvSMvs_T-HKLh_DTmwRTRw1qGSXgg3dYhK1NkbuocA&oe=620B6EC9&_nc_sid=7bff83",
            },
            likes : 69,
            caption : "Aadu quite literally stomping on my heart 🍑👅",
            comments : [
                {
                    user : "Yashita",
                    comment : "❤",
                },
                {
                    user : "Adrika",
                    comment : "Welcome to get stomped over any time😂💚",
                },
            ]
        },
        {
            imgurl : "https://instagram.fdel3-1.fna.fbcdn.net/v/t51.2885-15/e35/210174318_883984472198428_5622948274996593108_n.jpg?_nc_ht=instagram.fdel3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=_jGZOVYvwFIAX-td4IP&tn=g_nLRQpm5sluYVbO&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjYxMDU3ODkwNDA5MjM4MTY4Nw%3D%3D.2-ccb7-4&oh=00_AT86yPomkrUz4VjH8uZEoIOdq_TZxiIJYjbvds1AqGHzhQ&oe=620AC17D&_nc_sid=30a2ef",
            user : {
                name : "Yashita",
                image : "https://scontent-del1-2.cdninstagram.com/v/t51.2885-15/e35/129706828_2896695800619909_2470018438408750588_n.jpg?_nc_ht=scontent-del1-2.cdninstagram.com&_nc_cat=109&_nc_ohc=qM0JKig0CeUAX_dGpxq&tn=g_nLRQpm5sluYVbO&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjQ1Njg0NzE4OTU1MDE0NTAyNA%3D%3D.2-ccb7-4&oh=00_AT-ABXByEobBfV2Dxwz_Ciz-CRHLYLizZk4uaiUstFVoJA&oe=620AA9DB&_nc_sid=30a2ef",
            },
            likes : 69,
            caption : "Random camera roll dump pt 1",
            comments : [
                {
                    user : "Akash",
                    comment : "😍😍",
                },
                {
                    user : "Anmol",
                    comment : "Pt 1 tak he rehna chahiye",
                },
            ]
        },
        {
            imgurl : "https://i.ibb.co/182bp1y/4k.png",
            user : {
                name : "Akash",
                image : "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/59475072_401165673812171_6271609677679689728_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=AKiCdiFuyGsAX8z_wl-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT81KvSMvs_T-HKLh_DTmwRTRw1qGSXgg3dYhK1NkbuocA&oe=620B6EC9&_nc_sid=7bff83",
            },
            likes : 69,
            caption : "Train Ride To Hogwarts",
            comments : [
                {
                    user : "Yashita",
                    commet : "I LOVE Harry Potter",
                },
                {
                    user : "Adrika",
                    comment : "Isn't Harry Just The Best?",
                },
            ]
        },
    ])

    return (
        <PostContext.Provider value = {{posts}}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostContextProvider
export const usePostContext = () => {
    return useContext(PostContext)
}