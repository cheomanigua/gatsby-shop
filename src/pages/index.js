import React from "react"
import Layout from '../components/layout'
import { computer, hdd, pendrive, phone } from '../components/images'
import Shop from '../components/shop'

const categories = [
  {
    id: 1,
    title: 'Computers',
    content: 'Great Computers',
    image: computer
  },
  {
    id: 2,
    title: 'HDD',
    content: 'Get your HDD now',
    image: hdd
  },
  {
    id: 3,
    title: 'Pendrives',
    content: 'Great Pendrives',
    image: pendrive
  },
  {
    id: 4,
    title: 'Phones',
    content: 'Get your phone now',
    image: phone
  }
];

const IndexPage = ({ data }) => {
  return (
    <Layout>
      

      <main>
        <h3>h2 title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsam, alias rerum doloremque aperiam similique
      ratione consequatur nam minima error, explicabo debitis odio quod minus sequi voluptatibus, deserunt sed rem!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia unde neque, ullam eum culpa minima nisi
          reiciendis ducimus modi molestias voluptas laudantium nostrum iusto est, libero pariatur dolorem? Vero, veniam.
        </p>
        <h3>h3 title</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos aspernatur est natus ipsa vel quas pariatur quod
      libero, facilis reiciendis nesciunt? Quia fugiat error dolorem rerum voluptatum illum temporibus eum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae a doloremque harum sit reprehenderit pariatur
          beatae molestiae mollitia fugit voluptatem illum inventore, dignissimos illo deserunt consequatur tempora
      molestias fugiat qui.</p>
      </main>

      <section>
        <h2>Shop Categories</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam placeat tempore voluptatibus iste atque blanditiis nam. Aperiam a magnam suscipit!</p>

        <Shop cards={categories} />

      </section>
    </Layout>
  )
}

export default IndexPage

