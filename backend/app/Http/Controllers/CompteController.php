<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Compte;
use APP\Http\Controllers\CompteController;
use Illuminate\Support\Facades\DB;

class Message{
    function Message($s, $m) {
        $this->status = $s;
        $this->message = $m;
    }
};

class CompteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $listecompte = DB::table('comptes')->get();
        return  $listecompte;
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
    /*** Créer compte ***/
    
    public function store(Request $request)
    {
        $compte = new Compte();
        $numero = 0;
        $num_etudiant = $request->etudiant_id;       
        $mail = $request->mail;
        $telephone = $request->telephone;
        $mot_de_passe = $request->mot_de_passe;
        $confirme_mot_de_passe = $request->confirme_mot_de_passe;
        $etudiant = DB::table('etudiants')->where('et_num',$num_etudiant)->first();       
        if ($etudiant == NULL) {
            $res = new Message();
            $res->status = 'error';
            $res->message = 'message';
            return json_encode($res);
        }else {
            $numero = $etudiant->id;
            if ($request->mot_de_passe == $confirme_mot_de_passe) {
                $verifier_compte = DB::table('comptes')->where('etudiant_id',$numero)->first();
                if ($verifier_compte == NULL) {
                    $compte->etudiant_id = $numero;
                    $compte->mail = $mail;
                    $compte->telephone = $telephone;
                    $compte->mot_de_passe = $mot_de_passe;
                    $compte->save();
                    $res = new Message();
                    $res->status = 'ok';
                    $res->message = 'message';
                    return json_encode($res);
                }else{
                    $res = new Message();
                    $res->status = 'warning';
                    $res->message = 'message';
                    return json_encode($res);
                }
            }else {
                $res = new Message();
                $res->status = 'p-warning';
                $res->message = 'message';
                return json_encode($res);
            }
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
        return view('test');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $get = DB::table('comptes')->where('id',$id)->first();
        return $get;
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
        $telephone = $request->telephone;
        $mail = $request->mail;
        $mot_de_passe = $request->mot_de_passe;
        $confirmer_mot_de_passe = $request->confirmer_mot_de_passe;
        $ver = DB::table('comptes')->where('id','!=',$id)->where('mail',$mail)->first();
        if($ver == NULL){
            if($mot_de_passe == $confirmer_mot_de_passe){
                $update = DB::table('comptes')->where('id',$id)->update(['mail'=>$mail,'telephone'=>$telephone,'mot_de_passe'=>$mot_de_passe]);
                $res = new Message();
                $res->status = 'ok';
                $res->message = 'message';
                return json_encode($res);
            }else{
                $res = new Message();
                $res->status = 'warning';
                $res->message = 'message';
                return json_encode($res);
            }
        }else{
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
    //Supprimer compte
    public function destroy($id)
    {
        DB::table('comptes')->where('id',$id)->delete();
        $res = new Message();
        $res->status = 'ok';
        $res->message = 'message';
        return json_encode($res);
    }
}
