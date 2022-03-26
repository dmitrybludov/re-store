import React from 'react'

const BookstoreServiceContext = () => {
    const {
        Provider: BookstoreServiceProvider,
        Consumer: BookstoreServiceConsumer
    } = React.createContext()
}

export {
    BookstoreServiceProvider,
    BookstoreServiceConsumer
}