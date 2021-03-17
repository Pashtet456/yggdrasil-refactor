<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" href="{{asset('css/app.css') }}">

</head>
<body>
<div id="app">
    <lotr></lotr>
</div>

<script src="{{ asset('js/lotr.js') }}"></script>
</body>
</html>
