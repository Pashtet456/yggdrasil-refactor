<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/serverInfo', function (Request $request) {

    $serverHost = $request->get('host');
    $serverPort = $request->get('port');
    $socket = @fsockopen($serverHost, $serverPort);
    if ($socket !== false) {

        @fwrite( $socket, "\xFE" );
        $data = @fread( $socket, 256 );
        @fclose( $socket );

        if ( $data == false or substr( $data, 0, 1 ) !== "ÿ" )
        {
            $info = substr( $data, 3 );
            $info = iconv( 'UTF-16BE', 'UTF-8', $info );

            if ( $info[ 1 ] === "\xA7" && $info[ 2 ] === "\x31" ) {
                $info = explode( "\x00", $info );
                $playersOnline = IntVal( $info[ 4 ] );
                $playersMax = IntVal( $info[ 5 ] );
                return response(['playersOnline' => $playersOnline, 'playersMax' => $playersMax], 200)
                    ->header('Content-Type', 'application/json');
            }
            else {
                $info = Explode( "\xA7", $info );
                $playersOnline = IntVal( $info[ 1 ] );
                $playersMax = IntVal( $info[ 2 ] );
                return response(['playersOnline' => $playersOnline, 'playersMax' => $playersMax], 200)
                    ->header('Content-Type', 'application/json');
            }
        } else return response(['message' => 'Данные о сервере отсутствуют' ], 404);
    } else {
        header('HTTP/1.1 500 Internal Server Booboo');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(['message' => 'Не удалось установить соединение', 'code' => 500]));
    }
});

Route::post('/upload/image', function (Request $request){

    if($request->hasFile('fileToUpload')) {

        $imageFormat = explode(".", $request->file('fileToUpload')->getClientOriginalName())[1];
        $savedImageName = $request->get('name') . "." . $imageFormat;
        Storage::putFileAs('public', $request->file('fileToUpload'), $savedImageName);

        header('The HTTP 200 OK');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(['message' => 'Сохранение прошло успешно', 'code' => 200]));

    } else {
        header('HTTP/1.0 404 Not Found');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(['message' => 'Не удалось сохранить файл, проверте его на пригодность', 'code' => 404]));
    }
});

Route::get('/getSkin', function () {
    return Storage::disk('public')->path(Storage::url('Miner.png'));
});

Route::get('publicImageGet', function () {
    return response()->file(Storage::url('Miner.png'));
});

Route::get('/lotr/{vue_capture?}', function () {
    return view('lotr');
})->where('lotr/vue_capture', '/[\/\w\.-]*');

Route::get('/{vue_capture?}', function () {
    return view('index');
})->where('vue_capture', '[\/\w\.-]*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
