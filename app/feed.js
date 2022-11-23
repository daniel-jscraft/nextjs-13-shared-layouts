import Article from "./article"

const api = 'https://jsonplaceholder.typicode.com/posts?_limit=3'

const delayFetch = (url, options) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(fetch(url, options))
    , options.delay)
  })

const loadDataFromServer = async (delay)=> {
    const response = await delayFetch(api, {delay})
    return response.json()
}

export default async ({delay}) => {
    const articles = await loadDataFromServer(delay)
    return (<>
        {articles.map( p => <Article key={p.id} {...p}/>)}
    </>)
}