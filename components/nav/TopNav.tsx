'use client'
import { Avatar, Menu, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { signOutFirebase } from '@/firestore/firebaseService';
import ToggleTheme from '@/common/ToggleTheme';

function TopNav() {
  const router = useRouter();
  const patch = usePathname();
  const [current, setCurrent] = useState('mail');
  const { authenticated } = useSelector((state:any) => state.auth);
  const { currentUserProfile } = useSelector((state:any) => state.profile);

  const items = [
    {
      label: 'Home',
      key: '/',
    },
    {
      label: 'Posts',
      key: '/posts',
    },
    {
      label: 'Contract',
      key: '/contract',
    },
  ];
  const handleClick = async (e:any) => {
    if(e.key !== 'theme' && e.key !== 'logout'){
      router.push(e.key)
    } else if( e.key === 'logout') {
      try {
        await signOutFirebase();
        router.push("/");      
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setCurrent(patch)
  })
  return (
    <div className="p-sticky">
        <Menu 
            onClick={handleClick} 
            selectedKeys={[current]} 
            mode="horizontal" 
            items={
              authenticated ? 
              [...items,    
                {
                    label: currentUserProfile?.displayName,
                    key: 'dashboard1',
                    icon: <Space size={16} wrap>
                            <Avatar 
                              src={<img src={currentUserProfile?.photoURL ?? '../../user.png'} alt="avatar" />} 
                            />
                          </Space>,
                    style: {marginLeft: "auto"},
                    children: [
                      {
                        type: 'group',
                        label: 'Managment',
                        children: [
                          {
                            label: 'Dashboard',
                            icon: <i className="ri-home-7-line"></i>,
                            key: '/admin',
                          },
                          {
                            label: 'Profile',
                            icon: <i className="ri-home-7-line"></i>,
                            key: `/profile/${currentUserProfile?.id}`,
                          },
                          {
                            label: 'Logout',
                            icon: <i className="ri-home-7-line"></i>,
                            key: 'logout',
                          },
                        ],
                      },
                    ],
                },
                {
                label: ( <ToggleTheme /> ),
                key: 'theme',
                },
              ]  
              : 
              [...items,    
                {
                    label: 'Signin/Signup',
                    key: '/signin',
                    icon: <i className="ri-user-settings-line icons-16"></i>,
                    style: {marginLeft: "auto"},
                },
                {
                label: ( <ToggleTheme /> ),
                key: 'theme',
                },
              ]
             } 
        />
    </div>
  );
}

export default TopNav
