class Sample<T> implements Iterator<T> {

    next(...args: [] | [undefined]): IteratorResult<T, any> {
        return this.next();
    }
}