import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainLayout from '../../components/Layouts/MainLayout'


export default function Home() {
  return (
    <div className=' my-5'>
      <h2 className=' text-center'>This is main Home Page</h2>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}