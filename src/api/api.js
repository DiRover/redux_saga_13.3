export const loaderList = async () => {
    const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}/ra/news`);
    console.log(response);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};

export const loaderContinuation = async (lastSeenId) => {
    const response = await fetch(`${process.env.REACT_APP_SEARCH_URL}/ra/news?lastSeenId=${lastSeenId}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};