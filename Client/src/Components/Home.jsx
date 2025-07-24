import PageOne from './pageOne';
import PageFour from './PageFour';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFive from './PageFive';
import PageSix from './PageSix';

const Home = () => {
  return (
    <div className='mb-8'>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
    </div>
  );
};


export default Home;