import Card from "../components/Card/Card"
import LayoutWrapper from "../layout/LayoutWrapper"

const Home = () => {
  return (
    <>
      <LayoutWrapper>
        <div className='list-products'>
          <Card
            id={1}
            imgUrl='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            category='Fashion'
            title='Nike Air Zoom Pegasus Merah'
            price={1500000}
          />
          <Card
            id={2}
            imgUrl='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            category='Fashion'
            title='Nike Air Hijau'
            price={2000000}
          />
          <Card
            id={3}
            imgUrl='https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            category='Fashion'
            title='Kaos Polos Hijau'
            price={155000}
          />
          <Card
            id={4}
            imgUrl='https://images.unsplash.com/photo-1651241680016-cc9e407e7dc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            category='Elektronik'
            title='Macbook Air M1'
            price={12000000}
          />
          <Card
            id={5}
            imgUrl='https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            category='Aksesoris'
            title='Jam Tangan Rolex'
            price={500000000}
          />
        </div>
      </LayoutWrapper>
    </>
  )
}

export default Home
