import React from 'react'
import Head from 'next/head';

export default function SEO({subtitle}) {
  return (
    <Head>
      <title>Auto Spray IoT | { subtitle }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}
