import React from 'react'
import { MenuItem } from '@/presentation/Menu/MenuItem';
import { ViewThemed } from '@/presentation/shared/ViewThemed';

import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes';
import { View } from 'react-native';

const ComponentApp = () => {
  return (
    <ViewThemed isMargin>
        {
            animationMenuRoutes.map((route, idx) => (
                <MenuItem 
                    key={`${route.title}-${idx}`}
                    title={route.title}
                    name={route.name}
                    icon={route.icon}
                    isFirst={idx === 0}
                    isLast={idx === animationMenuRoutes.length - 1}
                    />
            ))
        }

        <View className='my-3'>
            {
                uiMenuRoutes.map((route, idx) => (
                    <MenuItem 
                        key={`${route.title}-${idx}`}
                        title={route.title}
                        name={route.name}
                        icon={route.icon}
                        isFirst={idx === 0}
                        isLast={idx === animationMenuRoutes.length - 1}
                        />
                ))
            }
        </View>

        <View className='my-3'>
            {
                menuRoutes.map((route, idx) => (
                    <MenuItem 
                        key={`${route.title}-${idx}`}
                        title={route.title}
                        name={route.name}
                        icon={route.icon}
                        isFirst={idx === 0}
                        isLast={idx === animationMenuRoutes.length - 1}
                        />
                ))
            }
        </View>
    </ViewThemed>
  )
}

export default ComponentApp;