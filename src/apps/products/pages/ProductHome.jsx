import React from 'react'
import SettingsMenu from '../../../common-components/SettingsMenu'
import ListOutlined from '@mui/icons-material/ListOutlined'
import AddOutlined from '@mui/icons-material/AddOutlined'


const ProductHome = () => {
  const menuItems = [
    {
      'type': 'item',
      'label': 'Products List',
      'icon': <ListOutlined />,
      'path': 'list',
    },
    {
      'type': 'item',
      'label': 'New Products',
      'icon': <AddOutlined />,
      'path': 'new',
    },
    {
      'type': 'header',
      'title': 'Categories',
    },
    {
      'type': 'item',
      'label': 'Product Categories List',
      'icon': <ListOutlined />,
      'path': 'categories/list',
    },
    {
      'type': 'item',
      'label': 'New Product Category',
      'icon': <AddOutlined />,
      'path': 'categories/new',
    },
    {
      'type': 'header',
      'title': 'Brands',
    },
    {
      'type': 'item',
      'label': 'Product Brands List',
      'icon': <ListOutlined />,
      'path': 'brands/list',
    },
    {
      'type': 'item',
      'label': 'New Product Brand',
      'icon': <AddOutlined />,
      'path': 'brands/new',
    },
  ]
  return (
    <div>
      <SettingsMenu menuItems={menuItems} />
    </div>
  )
}

export default ProductHome
