<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/server', function () {

//    return response(['type' => 'sdasd', 'message' => '$socket', 'querty' => 'q'], 200)
//        ->header('Content-Type', 'application/json');

    //$socket = stream_socket_client('tcp://gulag.pw:25565');
//
    //fwrite($socket, "\xfe\x01");
    //$data = fread($socket, 1024);
    //fclose($socket);

   //return response()->json([
   //                            'name' => json_encode($data),
   //                            'state' => json_encode($socket),
   //                        ]);

    $socket = @fsockopen('gulag.pw', '25565');

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
        } else response(['message' => 'Данные о сервере отсутствуют' ], 404);
    } else response(['message' => 'Не удалось установить соединение' ], 500);
});

Route::get('/lotr/{vue_capture?}', function () {
    return view('lotr');
})->where('lotr/vue_capture', '/[\/\w\.-]*');

Route::get('/{vue_capture?}', function () {
    return view('index');
})->where('vue_capture', '[\/\w\.-]*');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
