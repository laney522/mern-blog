import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/12576276/pexels-photo-12576276.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="singlePostImg" />
        <h1 className="singlePostTitle">
          Neque porro quisquam est qui dolorem ipsum.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>
            Autor: <b>Laney</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id sint dolores perspiciatis eaque nostrum doloribus molestiae voluptatibus delectus earum, exercitationem laboriosam debitis iure, quo nam enim? Necessitatibus, ullam architecto
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id sint dolores perspiciatis eaque nostrum doloribus molestiae voluptatibus delectus earum, exercitationem laboriosam debitis iure, quo nam enim? Necessitatibus, ullam architecto
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id sint dolores perspiciatis eaque nostrum doloribus molestiae voluptatibus delectus earum, exercitationem laboriosam debitis iure, quo nam enim? Necessitatibus, ullam architecto
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci id sint dolores perspiciatis eaque nostrum doloribus molestiae voluptatibus delectus earum, exercitationem laboriosam debitis iure, quo nam enim? Necessitatibus, ullam architecto
        </p>
      </div>
    </div>
  )
}
