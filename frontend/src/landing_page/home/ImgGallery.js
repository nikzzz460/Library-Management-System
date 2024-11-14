import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
  
    <>
    <MDBRow className="mt-4 mx-3">

      <MDBCol lg={2} className='mb-4'>
          <img
            src='..\images\galleryimg-9.jpg'
            className='img-fluid w-100 shadow-lg rounded mb-3'
            alt='Boat on Calm Water'
            style={{ height: '150px' }}
          />

        <img
          src='..\images\galleryimg-1.jpg'
          className='img-fluid w-100 shadow-lg rounded mb-3'
          alt='Wintry Mountain Landscape'
          style={{ height: '235px' }}
        />
      </MDBCol>

      <MDBCol lg={2} className='mb-4'>
        <img
          src='..\images\galleryimg-5.jpg'
          className='img-fluid w-100 shadow-lg rounded mb-3'
          alt='Mountains in the Clouds'
          style={{ height: '250px' }}
        />

        <img
          src='..\images\galleryimg-7.jpg'
          className='img-fluid w-100 shadow-lg rounded mb-3'
          alt='Boat on Calm Water'
          style={{ height: '136px' }}
        />
      </MDBCol>

      <MDBCol lg={2} className='mb-4 mb-lg-0'>
        <img
          src='..\images\galleryimg-3.jpg'
          className='img-fluid shadow-lg rounded mb-3'
          alt='Waves at Sea'
          style={{ height: '150px', width: '250px' }}

        />

        <img
          src='..\images\galleryimg-6.jpg'
          className='img-fluid shadow-lg rounded mb-3'
          alt='Yosemite National Park'
          style={{ height: '235px', width: '250px'}}

        />
      </MDBCol>

      <MDBCol lg={2} className='mb-4'>
          <img
            src='..\images\galleryimg-9.jpg'
            className='img-fluid w-100 shadow-lg rounded mb-3'
            alt='Boat on Calm Water'
            style={{ height: '150px' }}
          />

        <img
          src='..\images\galleryimg-1.jpg'
          className='img-fluid w-100 shadow-lg rounded mb-3'
          alt='Wintry Mountain Landscape'
          style={{ height: '235px' }}
        />
      </MDBCol>

      <MDBCol lg={2} className='mb-4'>
        <img
          src='..\images\galleryimg-5.jpg'
          className='img-fluid w-100 shadow-lg rounded mb-3'
          alt='Mountains in the Clouds'
          style={{ height: '250px' }}
        />

        <img
          src='..\images\galleryimg-7.jpg'
          className='img-fluid w-100 shadow-lg rounded mb-3'
          alt='Boat on Calm Water'
          style={{ height: '136px' }}
        />
      </MDBCol>

      <MDBCol lg={2} className='mb-4 mb-lg-0'>
        <img
          src='..\images\galleryimg-3.jpg'
          className='img-fluid shadow-lg rounded mb-3'
          alt='Waves at Sea'
          style={{ height: '150px', width: '250px' }}

        />

        <img
          src='..\images\galleryimg-6.jpg'
          className='img-fluid shadow-lg rounded mb-3'
          alt='Yosemite National Park'
          style={{ height: '235px', width: '250px'}}

        />
      </MDBCol>
      
    </MDBRow>
    </>


  );
}
