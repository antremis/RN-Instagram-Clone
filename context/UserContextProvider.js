import React, {createContext, useContext, useState} from 'react'

const UserContext = createContext()

const UserContextProvider = (props) => {

    const [users, setUsers] = useState([
        {
            name : "Akash",
            image : "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/59475072_401165673812171_6271609677679689728_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=AKiCdiFuyGsAX8z_wl-&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT81KvSMvs_T-HKLh_DTmwRTRw1qGSXgg3dYhK1NkbuocA&oe=620B6EC9&_nc_sid=7bff83",
        },
        {
            name : "Yashita",
            image : "https://scontent-del1-2.cdninstagram.com/v/t51.2885-15/e35/129706828_2896695800619909_2470018438408750588_n.jpg?_nc_ht=scontent-del1-2.cdninstagram.com&_nc_cat=109&_nc_ohc=qM0JKig0CeUAX_dGpxq&tn=g_nLRQpm5sluYVbO&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=MjQ1Njg0NzE4OTU1MDE0NTAyNA%3D%3D.2-ccb7-4&oh=00_AT-ABXByEobBfV2Dxwz_Ciz-CRHLYLizZk4uaiUstFVoJA&oe=620AA9DB&_nc_sid=30a2ef",
        },
        {
            name : "Anmol",
            image : "https://randomuser.me/api/portraits/men/51.jpg",
        },
        {
            name : "Adrika",
            image : "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/34982897_151844002350601_8121207652593172480_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=z86HFYzKXywAX-Giyz5&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_lde_zMc6e9hA-NoR6JxOEnfJyIQDTnJdEdMrqJts3ww&oe=620A475D&_nc_sid=7bff83",
        },
        {
            name : "Khushi",
            image : "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/s320x320/39347926_2245087012389655_4560879591857586176_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=seFKA-41aewAX_wUKa9&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_gDm1OhsiUHgt60zp4anTMrDkRhIHZ4O43QqvUTjIWRw&oe=620AFAB4&_nc_sid=7bff83",
        },
        {
            name : "Guneet",
            image : "https://instagram.fdel11-2.fna.fbcdn.net/v/t51.2885-19/s320x320/136428949_1125586624546782_5697154036570969490_n.jpg?_nc_ht=instagram.fdel11-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3PEa4QBvrd4AX9NbHCP&tn=g_nLRQpm5sluYVbO&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT8ezjzdPYlDNlhGXHrnz_rKpugJIFNRu5L9OYYAPzaGcA&oe=620A95DB&_nc_sid=7bff83",
        },
    ])

    return (
        <UserContext.Provider value = {{users}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
export const useUserContext = () => {
    return useContext(UserContext)
}