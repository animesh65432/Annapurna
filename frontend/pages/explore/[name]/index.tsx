"use client"
import React from 'react'
import { useRouter } from 'next/router';
import ExploreComponentTypes from '@/components/Explore/ExploreType';
import Pageloading from '@/components/Pageloading';

export default function ExploreTypes() {
    const router = useRouter();
    const { name } = router.query;

    if (!name || typeof name !== 'string') {
        return <Pageloading />;
    }
    return <>
        <ExploreComponentTypes name={name} />
    </>
}
