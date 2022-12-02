import { Box } from '@mui/material'
import React from 'react'
import OneFeed from './subcomponents/OneFeed'

const data=[
  {
    avatarUrl:"https://picsum.photos/id/3/5000/3333",
    title:"Shrimp and Chorizo Paella" ,
    subheader:"September 14, 2016" ,
    text:" This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like.",
    imageUrl:'https://pixabay.com/get/g4c7e9de9ca482e79dc2d07901d464c4eb8ca15bb1107585d09a38fa5293a4b93916f7fa6b2ac0a6c336b1f30841e9d4d42bdb4bfb31166f7a461bb9305455ed0902a680a17db6a194dbc857a1ffa37ad_1920.jpg' 
  },
  {
    avatarUrl:"https://picsum.photos/id/128/3823/2549",
    title:"Adam Anwar" ,
    subheader:"September 23, 2019" ,
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently",
    imageUrl:'https://pixabay.com/get/g7f87ca1f2f929802e96b3268dbb55d062b7b3cb5338e97476741d46e8bcd1ce4477c0c632de25ebfa2f7542ef9b39adf41b19b7e9a7b77c42d0149dd3f8f9d8e8416f8d89eba5f5adf450f2ffa46264a_1920.jpg'

  },
  {
    avatarUrl:"https://picsum.photos/id/145/4288/2848",
    title:"Horaan and Beli" ,
    subheader:"December 12, 2012" ,
    text:" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
    imageUrl:"https://pixabay.com/get/g9a7e2ebbc92c7541a153090dbd02f71806a650e04275542b124534ccbcdf90e5da96e8e61c08d8e41994eea3d8888847600e91d7644e5c6c786608a484c564718417d69e4c0281b835d19ea0e2615c5a_1920.jpg"

  },
  {
    avatarUrl:"https://picsum.photos/id/152/3888/2592",
    title:"Jam Anderson" ,
    subheader:"January 22, 2015" ,
    text:" At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    imageUrl:'https://pixabay.com/get/g8554ec6d0968742e28cc098e1090d052ca4f43154e4f50eadcd805be604e308d388e3b76ff42056b9ba20374ee023b3472c3e46bb4a82be9691ce5c4e80732054d829256631a6e64384ecf73aa29a2ac_1920.jpg'
  },
]

export default function Feed() {
  return (
    <Box flex={4} p={2}>
        
        <Box>
          {
            data.map(item=>{
            return  <OneFeed key={item.imageUrl} title={item.title} subheader={item.subheader} text={item.text}  imageUrl={item.imageUrl} avatarUrl={item.avatarUrl} />
            })
          }
       

       
        </Box>
   
        </Box>
  )
}
