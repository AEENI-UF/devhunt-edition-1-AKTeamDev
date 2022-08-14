<?php

namespace App\Http\Controllers;
use APP\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use App\Models\CompteAdmin;
use Illuminate\Support\Facades\DB;

class Message{
    function Message($s, $m) {
        $this->status = $s;
        $this->message = $m;
    }
};

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('test');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {;
        $super_user = $request->super_user; 
        $super_mdp = $request->super_mdp;            
        $confirmer_super_mdp = $request->confirmer_super_mdp;
        $admin = DB::table('compte_admins')->where('super_user',$super_user)->first(); 
        if ($admin == NULL) {
            if ($super_mdp == $confirmer_super_mdp) {
                DB::insert(" insert into compte_admins (super_user, super_mdp) values(?,?)",
                 [$super_user, $super_mdp]);
                $res = new Message();
                $res->status = 'ok';
                $res->message = 'message ok';
                return json_encode($res);
            }else {
                $res = new Message();
                $res->status = 'warning';
                $res->message = 'message blm mdp';
                return json_encode($res);
            }
            
        }else {
            $res = new Message();
            $res->status = 'error';
            $res->message = 'message nom';
            return json_encode($res);
        }      

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $admins = DB::table('compte_admins')->get();
        return $admins;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $admin = DB::table('compte_admins')->where('id',$id)->first();
        return $admin;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request->id;
        $super_user = $request->super_user; 
        $super_mdp = $request->super_mdp;
        $confirmer_super_mdp = $request->confirmer_super_mdp;
        $ver = DB::table('compte_admins')->where('id','!=',$id)->where('super_user',$super_user)->first();
        if ($ver == NULL) {
            if ($super_mdp == $confirmer_super_mdp ) {
                $update = DB::table('compte_admins')->where('id',$id)->update(['super_user'=>$super_user,'super_mdp'=>$super_mdp]);
                $res = new Message();
                $res->status = 'ok';
                $res->message = 'message';
                return json_encode($res);
            }else {
                //mot de pass non ident
                $res = new Message();
                $res->status = 'warning';
                $res->message = 'message';
                return json_encode($res);
            }
        }else {
            //NOM DEJA EXISTE
            $res = new Message();
            $res->status = 'error';
            $res->message = 'message';
            return json_encode($res);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('compte_admins')->where('id', $id)->delete();
        return $id;
    }
}
