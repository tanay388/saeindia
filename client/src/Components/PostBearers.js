import React, { useState } from 'react'
import './PostBearers.css'

function Card(props) {
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} alt={props.title} class="card__image" />
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            {/* <button className="card__btn">View Recipe</button> */}
        </div>
    )
}

function PostBearers() {
    const [post, setPosts] = useState([
        {
            name: 'SOUVIK SHANTIKARI',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Chairman',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FIMG_20210712_211748%20-%2018OO086%20Souvik%20Shantikari%20(1)%20(1).jpg?alt=media&token=7d57ed4a-54a9-44b4-be4d-8d2b583b91eb',
        },
        {
            name: 'ANKITA JHA',
            branch: 'Metal',
            batch: 2018,
            post: 'Vice-President',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.17.28%20AM.jpeg?alt=media&token=3939fdc5-900f-4ba1-87e6-29aef4cc8c23',
        },
        {
            name: 'SHIVAM RAJ',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Secretary',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.17.10%20AM.jpeg?alt=media&token=b3f71e23-49e5-49b7-bca9-94998008fe0a',
        },
        {
            name: 'SACHIN MANDAL',
            branch: 'Mining',
            batch: 2018,
            post: 'Treasurer',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.13.26%20AM.jpeg?alt=media&token=0fa8e3c3-1ad5-4f91-a671-1441b6011072',
        },
        {
            name: 'JYOTSNA PRIYADARSHI',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Technical Head',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FIMG_20210601_095657.jpg?alt=media&token=1701ecfc-726b-427e-9789-840c3b47a383',
        },
        {
            name: 'YESH MISHRA',
            branch: 'Mining',
            batch: 2018,
            post: 'Marketing Head',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FIMG-20210605-WA0039.jpg?alt=media&token=0b00b7dd-dd08-4e7c-b6e7-1bf4d1b612e9',
        },
        {
            name: 'NISHA KUMARI',
            branch: '',
            batch: 2018,
            post: 'P.R.O',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-05%20at%2011.50.34%20PM.jpeg?alt=media&token=2f51b4ac-11cc-41bc-ba64-625b5b75d7dc',
        },
        {
            name: 'SHANU ANAND',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Jt. Secretary',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FIMG_20200715_190304.jpg?alt=media&token=db23f669-9c8a-403c-9fee-0453708f989c',
        },
        {
            name: 'SONU KUMAR',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Team Manager',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.12.52%20AM.jpeg?alt=media&token=87e7d67a-e149-42bf-9600-d5878220731f',
        },
        {
            name: 'RAJ ROSHAN',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Media cum Website Incharge',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.17.42%20AM.jpeg?alt=media&token=d7598459-8748-4664-bdb7-e11f51e12a33',
        },
        {
            name: 'ANKIT PATHAK',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Alumni Incharge',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.19.12%20AM.jpeg?alt=media&token=e0c0d15a-fba4-4b34-ab8c-746064a4ac47',
        },
        {
            name: 'SUNIL KUMAR',
            branch: '',
            batch: 2018,
            post: 'Team Manager',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.19.59%20AM.jpeg?alt=media&token=797265f4-d3a9-4e77-856e-f97dc3329cbf',
        },
        {
            name: 'VIKRAM KUMAR',
            branch: 'Mechanical',
            batch: 2018,
            post: 'Jt. Treasurer',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.30.19%20AM.jpeg?alt=media&token=c434f06e-0345-451b-acf8-27c0194cb584',
        },
        {
            name: 'CHETNA KOTAK',
            branch: 'Metal',
            batch: 2018,
            post: 'Alumni Incharge',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.29.51%20AM.jpeg?alt=media&token=ffc4089d-7d44-4f08-9984-77b3da1b061c',
        },
        {
            name: 'VIVEK KUMAR',
            branch: '',
            batch: 2018,
            post: 'Brand and Sponsors Lead',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%209.31.10%20AM.jpeg?alt=media&token=a1be0180-618c-44ff-a3b7-164db1a7b958',
        },
        {
            name: 'ADITYA JHA',
            branch: '',
            batch: 2018,
            post: 'P.R.O.',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.24.49%20AM.jpeg?alt=media&token=a0c2dd38-0efc-4a37-89bd-9744cb3f7439',
        },
        {
            name: 'RAHUL GUPTA',
            branch: '',
            batch: 2018,
            post: 'Media cum Website Incharge',
            imageurl:
                'https://firebasestorage.googleapis.com/v0/b/saeindia-bitsindri.appspot.com/o/Post%20Bearers%2F2018%2FWhatsApp%20Image%202021-06-06%20at%208.12.52%20AM%20(1).jpeg?alt=media&token=f89754ab-68af-4fb5-872e-3f663fb86c7c',
        },
    ])

    return (
        <div className="PostBearers">
            <h2 className="section-heading">Post Bearers</h2>

            <div className="wrapper">
                {post.map((member) => {
                    return (
                        <Card
                            img={member.imageurl}
                            title={member.name}
                            description={member.post}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default PostBearers
