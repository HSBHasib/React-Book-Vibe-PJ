import bannerImg from '../../assets/img/bannerImg.png'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-screen-[60vh] my-6">
        <div className="hero-content flex-col lg:flex-row-reverse sm:gap-20 gap-10 bg-gray-100 w-[90%] rounded-lg py-10">
            <img
            src={bannerImg}
            className="sm:max-w-75 max-w-50 rounded-lg"
            />
            <div className='space-y-7'>
              <h1 className="sm:text-5xl text-4xl font-bold sm:leading-14">Books to freshen up <br /> your bookshelf</h1>
              <button className="btn bg-[#23BE0A] text-white font-bold rounded-lg py-5 active:scale-95">View The List</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner

