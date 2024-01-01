// import { Models } from 'appwrite';
import React from 'react'
import Loader from './Loader';
import GridPostList from './GridPostList';

type SearchResultsProps = {
    isSearchFetching: boolean;
    searchedPosts: any;
}
const SeachResults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {
    if(isSearchFetching) return <Loader />

    if(searchedPosts && searchedPosts.documents.length > 0) {
  return (
    <div>
      <GridPostList posts={searchedPosts.documents} />
    </div>
  )
    }
    return (
        <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
    )
}

export default SeachResults
