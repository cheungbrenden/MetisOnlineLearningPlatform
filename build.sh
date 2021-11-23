BASEDIR=$(dirname "$0")
cd $BASEDIR
cd client
rm -rf build
if npm run build
then cd ..
    cd server
    rm -rf build
    mv ../client/build ./build
fi