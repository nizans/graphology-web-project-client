import ImageBox from 'components/common/ImageBox';
import Section from 'components/common/Section';
import LoadingSection from 'components/UI/LoadingSection';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import { SectionHeightContext } from 'context/sectionHeightContext';
import { useFetchData } from 'lib/reactQuery';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { booksApiCRUDRequests } from '..';
import OrderBookForm from './OrderBookForm';

const OrderBook = () => {
  const { setTitle } = useContext(BreadCrumbsTitleContext);
  const { windowHeight, headerHeight, breadCrumbHeight, footerHeight } = useContext(SectionHeightContext);
  const { id } = useParams();
  const { data: book, isLoading, error } = useFetchData(booksApiCRUDRequests.read(id));

  useEffect(() => {
    if (book) setTitle(book._id, book.title);
  }, [book]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) return <LoadingSection />;
  if (error) return 'ERROR';

  return (
    <Section className="flex flex-col md:grid gap-x-7 grid-cols-2">
      <ImageBox
        height={
          windowHeight < 1024
            ? windowHeight - headerHeight - breadCrumbHeight
            : windowHeight - headerHeight - breadCrumbHeight - footerHeight
        }
        images={book.images}
        imgClassName=" object-cover"
      />
      <OrderBookForm book={book} />
    </Section>
  );
};

export default OrderBook;
