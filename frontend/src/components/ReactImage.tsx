import { Suspense } from 'react';
import { useImage } from 'react-image';

import spinner from '../imgs/other/spinner.webp';

interface PropsInterface {
  srcList: Array<string>;
  className: string;
  alt: string;
  w: string;
  h: string;
}

const InnerImage = ({ srcList, className, alt, w, h }: PropsInterface) => {
  const { src } = useImage({
    srcList,
  });
  return <img src={src} draggable={false} className={className} alt={alt} width={w} height={h}></img>;
};

const ReactImage = ({ srcList, className, alt, w, h }: PropsInterface) => {
  return (
    <Suspense
      fallback={
        <img
          src={spinner}
          alt="loadingSpinner"
          width={w}
          height={h}
          draggable={false}
          className={`loading-spinner ${className}`}
        />
      }
    >
      <InnerImage srcList={srcList} className={className} alt={alt} w={w} h={h} />
    </Suspense>
  );
};
export default ReactImage;
