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
            category='Sepatu Lari'
            title='Nike Air Zoom Pegasus Merah'
            price={1500000}
          />
          <Card
            id={2}
            imgUrl='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            category='Sepatu Lari'
            title='Nike Air Zoom Pegasus Merah'
            price={1500000}
          />
          <Card
            id={3}
            imgUrl='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            category='Sepatu Lari'
            title='Nike Air Zoom Pegasus Merah'
            price={1500000}
          />
          <Card
            id={3}
            imgUrl='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            category='Sepatu Lari'
            title='Nike Air Zoom Pegasus Merah'
            price={1500000}
          />
          <Card
            id={4}
            imgUrl='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            category='Sepatu Lari'
            title='Nike Air Zoom Pegasus Merah'
            price={1500000}
          />
        </div>
      </LayoutWrapper>
    </>
  )
}

export default Home
