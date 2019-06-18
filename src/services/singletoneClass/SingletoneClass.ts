
// types

class SingletoneClass {
    private static instance: SingletoneClass;
    private constructor() {
    }

    static getInstance(): SingletoneClass {
        if (!SingletoneClass.instance) {
            SingletoneClass.instance = new SingletoneClass();
        }

        return SingletoneClass.instance;
    }

}

export default SingletoneClass;
