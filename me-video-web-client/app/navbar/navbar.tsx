'use client';

import { User } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onAuthStateChangedHelper } from '../firebase/firebase';
import styles from './navbar.module.css';
import SignIn from './sign-in';
import Upload from './upload';

export default function Navbar() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedHelper((user) => {
			setUser(user);
		});

		// Cleanup subscription on unmount
		return () => unsubscribe();
	});

	return (
		<nav className={styles.nav}>
			<Link href='/'>
				<Image width={90} height={20} src='/youtube-logo.svg' alt='MeVideo Logo' />
			</Link>
			{user && <Upload />}
			<SignIn user={user} />
		</nav>
	);
}
