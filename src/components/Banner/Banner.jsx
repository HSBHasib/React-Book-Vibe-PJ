import bannerImg from '../../assets/img/bannerImg.png'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-screen-[60vh] my-6">
        <div className="hero-content flex-col lg:flex-row-reverse gap-20 bg-gray-100 w-[90%] rounded-lg py-10">
            <img
            src={bannerImg}
            className="max-w-75 rounded-lg"
            />
            <div className='space-y-7'>
              <h1 className="text-5xl font-bold leading-14">Books to freshen up <br /> your bookshelf</h1>
              <button className="btn bg-[#23BE0A] text-white font-bold rounded-lg py-5 active:scale-95">View The List</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner

