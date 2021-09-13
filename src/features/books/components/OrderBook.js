import React from 'react';
import { BOOKS_API } from '..';
import LoadingSection from 'components/UI/LoadingSection';
import { useParams } from 'react-router';
import ImageBox from 'components/common/ImageBox';
import OrderBookForm from './OrderBookForm';
import Section from 'components/common/Section';
import { useContext } from 'react';
import { SectionHeightContext } from 'context/sectionHeightContext';
import { useFetchData } from 'utils/apiRequests';
import { BreadCrumbsTitleContext } from 'context/breadCrumbsTitleContext';
import { useEffect } from 'react';
const OrderBook = () => {
  const { setTitle } = useContext(BreadCrumbsTitleContext);
  const { windowHeight, headerHeight, breadCrumbHeight, footerHeight } = useContext(SectionHeightContext);
  const { id } = useParams();
  const { data: book, isLoading, error } = useFetchData(BOOKS_API.GET_BY_ID(id));

  useEffect(() => {
    if (book) setTitle(book._id, book.title);
  }, [book]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) return <LoadingSection />;
  if (error) return 'ERROR';

  return (
    <Section className="grid gap-x-7 grid-cols-2">
      <ImageBox
        maxHeight={windowHeight - headerHeight - breadCrumbHeight - footerHeight}
        images={book.images}
        imgClassName=" object-cover"
      />
      <OrderBookForm />
    </Section>
  );
};

export default OrderBook;
